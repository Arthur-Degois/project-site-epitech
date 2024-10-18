const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware pour traiter les données du formulaire
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Configurer la connexion à MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Utilise ton nom d'utilisateur MySQL
    password: "123456789", // Ajoute mot de passe MySQL 
    database: "inscription_db", // Crée cette base de données dans MySQL
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données :", err);
        return;
    }
    console.log("Connecté à la base de données MySQL");
});


const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

// Route pour gérer la soumission du formulaire
app.post("/inscription", [
    // Validation des données
    body("email").isEmail().withMessage('Email non valide'),
    body("password").isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nom, prenom, tel, naissance, email, password } = req.body;

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Requête SQL pour insérer les données dans la base de données
    const query = "INSERT INTO people (nom, prenom, tel, naissance, email, password) VALUES (?, ?, ?, ?, ?, ?);";

    db.query(query, [nom, prenom, tel, naissance, email, hashedPassword], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        console.log("Utilisateur inscrit avec succès");
        res.send("inscription réussie !");
    });
});

app.post("/inscription_company", [
    // Validation des données
    body("email").isEmail().withMessage('Email non valide'),
    body("password").isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { siret, nom, email, secteur, rue, ville, code_postal, pays, password } = req.body;

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Requête SQL pour insérer les données dans la base de données
    const query = "INSERT INTO companies (siret, nom, email, secteur, rue, ville, code_postal, pays, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";

    db.query(query, [siret, nom, email, secteur, rue, ville, code_postal, pays, hashedPassword], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        console.log("Utilisateur inscrit avec succès");
        res.send("inscription réussie !");
    });
});

app.post("/add", (req, res) => {
    const { title, description, company_name, location, salary, contract_type, skills_required, benefits, company_id } = req.body;
    // Requête SQL pour insérer les données dans la base de données
    const query = "INSERT INTO advertisements (title, description, company_name, location, salary, contract_type, skills_required, benefits, company_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";

    db.query(query, [title, description, company_name, location, salary, contract_type, skills_required, benefits, company_id], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        console.log("Utilisateur inscrit avec succès");
        res.send("inscription réussie !");
    });
});


app.post("/like", (req, res) => {
    const { people_id, advertisement_id } = req.body;
    // Requête SQL pour insérer les données dans la base de données
    const query = "INSERT INTO job_likes ( people_id, advertisement_id ) VALUES (?, ?);";

    db.query(query, [people_id, advertisement_id], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        console.log("Utilisateur inscrit avec succès");
        res.send("inscription réussie !");
    });
});

app.post("/unlike", (req, res) => {
    const { people_id, advertisement_id } = req.body;
    // Requête SQL pour insérer les données dans la base de données
    const query = "INSERT INTO job_not_likes ( people_id, advertisement_id ) VALUES (?, ?);";

    db.query(query, [people_id, advertisement_id], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        console.log("Utilisateur inscrit avec succès");
        res.send("inscription réussie !");
    });
});

app.post("/match-fill", (req,res)=>{
 
    const {advertisement_id,company_id, people_id } = req.body;
 
    const query = "INSERT INTO pumatch (advertisement_id, company_id, people_id) VALUES (?,?,?);";
 
    db.query(query, [advertisement_id,company_id,people_id], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }
        console.log("Utilisateur inscrit avec succès");
        res.send("inscription réussie !");
    });
});


app.get("/adprofil/:id", (req,res) => {
    console.log("ok");
    
    const query ="SELECT * FROM advertisements INNER JOIN job_likes ON job_likes.advertisement_id=advertisements.advertisement_id WHERE job_likes.people_id = ?;";
    const userId = req.params.id;
    db.query(query,[userId], (err,result)=>{
        if (err){
            console.error("Erreur lors de la récupération des données");
            res.status(500).send("Erreur Serveur");
            return;
        }
        // if (result.length === 0){
        //     res.status(404).send("personne non trouvé");
        //     return;
        // }
        console.log("c'est tout bon");
        res.json(result);
    })
})

// route pour la connexion d'un utilisateur

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)

    // Vérifier si l'utilisateur existe
    const query = "SELECT * FROM people WHERE email = ?";

    db.query(query, [email], async (err, result) => {
        if (err || result.length === 0) {
            console.log("email incorrect")
            res.status(400).send("Email incorrect");
            return
        };

        const user = result[0];
        console.log(user)

        // Comparer le mot de passe avec celui stocké dans la base de données
        const isMatch = await bcrypt.compare(password, user.password);
     
        if (!isMatch) {
            console.log("je match pas")
            res.status(400).send({msg: "Mot de passe incorrect"});
        }
        else {
            console.log("je match")
           // res.json(user);
            res.status(200).send(user);
        }
    });
});

app.post("/login-company", (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)

    // Vérifier si l'utilisateur existe
    const query = "SELECT * FROM companies WHERE email = ?";

    db.query(query, [email], async (err, result) => {
        if (err || result.length === 0) {
            console.log("email incorrect")
            res.status(400).send("Email incorrect");
            return
        };

        const user = result[0];
        console.log(user)

        // Comparer le mot de passe avec celui stocké dans la base de données
        const isMatch = await bcrypt.compare(password, user.password);
     
        if (!isMatch) {
            console.log("je match pas")
            res.status(400).send({msg: "Mot de passe incorrect"});
        }
        else {
            console.log("je match")
           // res.json(user);
            res.status(200).send(user);
        }
    });
});



app.get("/people", (req, res) => {
    const query = "SELECT * FROM people";

    db.query(query, [], (err, result) => {
        
        if (err) {
            console.error("Erreur lors de la récupération des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }

        // if (result.length === 0) {
        //     res.status(404).send("Utilisateur non trouvé");
        //     return;
        // }

        console.log("Données récupérées avec succès");
        res.json(result); // Retourne les données en JSON
    });
});

app.get("/company", (req, res) => {
    const query = "SELECT * FROM companies";

    db.query(query, [], (err, result) => {
        
        if (err) {
            console.error("Erreur lors de la récupération des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }

        // if (result.length === 0) {
        //     res.status(404).send("Utilisateur non trouvé");
        //     return;
        // }

        console.log("Données récupérées avec succès");
        res.json(result); // Retourne les données en JSON
    });
});


app.get("/advertisements",(req, res) => {
    const query = "SELECT * FROM advertisements";
 
     db.query(query, [], (err, result) => {

        if (err) {
            console.error("Erreur lors de la récupération des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }
 
        // if (result.length === 0) {
        //     res.status(404).send("Utilisateur non trouvé");
        //     return;
        // }
 
        console.log("Données récupérées avec succès");
        res.json(result); // Retourne les données en JSON
    });
});


app.get("/advertisement-selected/:id", (req,res)=>{
    const query = "SELECT a.* FROM advertisements a LEFT JOIN job_likes j ON a.advertisement_id = j.advertisement_id AND j.people_id= ? LEFT JOIN job_not_likes n ON n.advertisement_id = j.advertisement_id AND n.people_id = ? WHERE j.advertisement_id IS NULL AND n.advertisement_id IS NULL;";
 
    const userId = req.params.id;
    db.query(query, [userId, userId], (err, result)=>{
        if(err){
            console.error("Erreur lors de la récupération des données");
            res.status(500).send("Erreur Serveur");
            return;
        }
        // if (result.length === 0){
        //     res.status(404).send("personne non trouvé");
        //     return;
        // }
        console.log("c'est tout bon");
        res.json(result);
    })
})

app.get("/advertisement-wholiked/:id",(req,res)=>{
    const query = "SELECT p.*, a.* FROM people AS p INNER JOIN job_likes AS j ON p.people_id = j.people_id INNER JOIN advertisements AS a ON j.advertisement_id = a.advertisement_id     WHERE a.company_id = ?;";
    const userId = req.params.id;
    db.query(query,[userId], (err,result)=>{
        if (err){
            console.error("Erreur lors de la récupération des données");
            res.status(500).send("Erreur Serveur");
            return;
        }
        if (result.length === 0){
            res.status(404).send("personne non trouvé");
            return;
        }
        console.log("c'est tout bon");
        res.json(result);
    })
})

app.get("/match-people/:id", (req,res)=>{
    const query = "SELECT * FROM pumatch AS m INNER JOIN people AS p ON p.people_id = m.people_id INNER JOIN advertisements AS a ON a.advertisement_id = m.advertisement_id INNER JOIN companies AS c ON c.company_id = m.company_id WHERE m.people_id = ?;";
    const userId = req.params.id;
    db.query(query, [userId], (err, result)=>{
        if(err){
            console.error("Erreur lors de la récupération des données");
            res.status(500).send("Erreur Serveur");
            return;
        }
        console.log("c'est tout bon");
        res.json(result);
    })
})

app.get("/match-company/:id", (req,res)=>{
    const query = "SELECT * FROM pumatch AS m INNER JOIN people AS p ON p.people_id = m.people_id INNER JOIN advertisements AS a ON a.advertisement_id = m.advertisement_id INNER JOIN companies AS c ON c.company_id = m.company_id WHERE m.company_id = ?;";
    const userId = req.params.id;
    db.query(query, [userId], (err, result)=>{
        if(err){
            console.error("Erreur lors de la récupération des données");
            res.status(500).send("Erreur Serveur");
            return;
        }
        console.log("c'est tout bon");
        res.json(result);
    })
})







// ----------------INUTILE ?????-----------------------

app.get("/people-id/:id", (req, res) => {
    const userId = req.params.id;

    // Requête SQL pour récupérer les informations de l'utilisateur
    const query = "SELECT * FROM people WHERE people_id = ?";

    db.query(query, [userId], (err, result) => {
       
        
        if (err) {
            console.error("Erreur lors de la récupération des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }

        if (result.length === 0) {
            res.status(404).send("Utilisateur non trouvé1");
            return;
        }

        console.log("Données récupérées avec succès");
        res.json(result[0]); // Retourne les données en JSON
    });
});

app.get("/people-nom/:nom", (req, res) => {
    const userNom = req.params.nom;

    // Requête SQL pour récupérer les informations de l'utilisateur
    const query = "SELECT * FROM people WHERE NOM = ?";

    db.query(query, [userNom], (err, result) => {

        if (err) {
            console.error("Erreur lors de la récupération des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }

        if (result.length === 0) {
            res.status(404).send("Utilisateur non trouvé");
            return;
        }

        console.log("Données récupérées avec succès");
        res.json(result); // Retourne les données en JSON
    });
});

app.get("/people-prenom/:prenom", (req, res) => {
    const userPrenom = req.params.prenom;

    // Requête SQL pour récupérer les informations de l'utilisateur
    const query = "SELECT * FROM people WHERE PRENOM = ?";

    db.query(query, [userPrenom], (err, result) => {

        if (err) {
            console.error("Erreur lors de la récupération des données :", err);
            res.status(500).send("Erreur serveur");
            return;
        }

        if (result.length === 0) {
            res.status(404).send("Utilisateur non trouvé");
            return;
        }

        console.log("Données récupérées avec succès");
        res.json(result); // Retourne les données en JSON
    });
});

app.get ("/", (req, res) => {
    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err; 
        } res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);  
        res.end();})        

}
    )


    app.get("/people-login/:email", (req, res) => {
        const userEmail = req.params.email;
    
        // Requête SQL pour récupérer les informations de l'utilisateur
        const query = "SELECT * FROM people WHERE EMAIL = ?";
    
        db.query(query, [userEmail], (err, result) => {
    
            if (err) {
                console.error("Erreur lors de la récupération des données :", err);
                res.status(500).send("Erreur serveur");
                return;
            }
    
            if (result.length === 0) {
                res.status(404).send("Utilisateur non trouvé");
                console.log(res);
                
                return;
            }
    
            console.log("Données récupérées avec succès");
            res.json(result); // Retourne les données en JSON
        });
    });

    app.delete("/people-suppression/:id", (req, res)=>{
        const query = "DELETE FROM people WHERE people_id = ?";
        
        const userId = req.params.id;
        console.log(userId);
        db.query (query,[userId], (err,result)=>{
            if(err){
                console.error("Erreur lors de la récupération des données");
                res.status(500).send("Erreur Serveur");
                return;
            }
            if (result.length === 0){
                res.status(404).send("Entreprise non trouvé");
                return;
            }
            console.log("données supprimées avec succès");
            res.json(result);
        })
    } )

    app.delete("/company-suppression/:id", (req, res)=>{
        const query = "DELETE FROM companies WHERE company_id = ?";
        
        const userId = req.params.id;
        console.log(userId);
        db.query (query,[userId], (err,result)=>{
            if(err){
                console.error("Erreur lors de la récupération des données");
                res.status(500).send("Erreur Serveur");
                return;
            }
            if (result.length === 0){
                res.status(404).send("Entreprise non trouvé");
                return;
            }
            console.log("données supprimées avec succès");
            res.json(result);
        })
    } )


// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
