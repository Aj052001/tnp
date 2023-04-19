// require necessary modules
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// set up express app
const app = express();

// set up middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "frame-ancestors https://drive.google.com");
    next();
});
  

const db1 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Jaipur@2020",
    database: "student_experience_details",
});
const db2 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Jaipur@2020",
    database: "student_login_credentials",
});
const db3 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Jaipur@2020",
    database: "student_personal_information",
});
const db4 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Jaipur@2020",
    database: "student_project_details",
});
const db5 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Jaipur@2020",
    database: "student_education_details",
});
const db = (Scholar_No)=>{
    const databaseName = "students_opportunity_20" + Scholar_No.substring(0,2);
    const pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "Jaipur@2020",
        database: databaseName,
    });
    return pool;
}
const db7 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Jaipur@2020",
    database: "verifier_login_credentials",
});

app.post("/apiStudentLogin/post", (req, res) => {
    const Scholar_No = req.body["Scholar No"];
    const password = req.body.Password;
    const sqlVerify = "SELECT * FROM students_2020 WHERE `Scholar No` = ? AND Password = ?";
    db2.query(sqlVerify, [Scholar_No, password], (error, result) => {
        if (error) {
            res.send(error);
        } else {
            if (result.length > 0) {
                const payload = { "Scholar No": Scholar_No };
                const token = jwt.sign(payload, 'secret-key', { expiresIn: '2h' });
                res.send({
                    token: token,
                    isLoggedIn: true
                });
            } else {
                res.send("Invalid Credentials");
            }
        }
    })
});

app.post("/apiStudentLogin/post2", (req, res) => {
    const username = req.body["username"];
    const Password = req.body.Password;
    const sqlVerify = "SELECT * FROM verifier_details WHERE username = ? AND Password = ?";
    db7.query(sqlVerify, [username, Password], (error, result) => {
        if (error) {
            res.send(error);
        } else {
            if (result.length > 0) {
                const payload = { "username": username };
                const token = jwt.sign(payload, 'secret-key', { expiresIn: '2h' });
                res.send({
                    token: token,
                    isLoggedIn: true
                });
            } else {
                res.send("Invalid Credentials");
            }
        }
    })
});

app.get("/api/checkLoginStatus", (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token && token != "null") {
        jwt.verify(token, 'secret-key', function (err, decoded) {
            if (err) {
                // If the token is invalid or has expired, return a JSON object with isLoggedIn set to false
                res.send({
                    isLoggedIn: false
                });
            } else {
                const Scholar_No = decoded['Scholar No'];
                const year = Scholar_No.substring(0, 2);
                // If the token is valid, fetch the user data from the database based on the user ID stored in the token payload
                const sqlQuery = "SELECT * FROM students_20" + year + " WHERE `Scholar No` = ?";
                db2.query(sqlQuery, Scholar_No, function (error, results) {
                    const user = results[0];
                    if (user) {
                        // If the user exists, return a JSON object with isLoggedIn set to true and the user's data
                        res.send({
                            isLoggedIn: true,
                            user: {
                                "Scholar No": user['Scholar No'],
                                Password: user.Password,
                                Email: user.Email
                                // Add any other user data you want to expose to the client
                            }
                        });
                    } else {
                        // If the user doesn't exist, return a JSON object with isLoggedIn set to false
                        res.send({
                            isLoggedIn: false
                        });
                    }
                });
            }
        });
    } else {
        res.send("Error: Authentication required. ");
    }
});

app.get("/api/checkLoginStatus2", (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token && token != "null") {
        jwt.verify(token, 'secret-key', function (err, decoded) {
            if (err) {
                // If the token is invalid or has expired, return a JSON object with isLoggedIn set to false
                res.send({
                    isLoggedIn: false
                });
            } else {
                const username = decoded['username'];
                // If the token is valid, fetch the user data from the database based on the user ID stored in the token payload
                const sqlQuery = "SELECT * FROM verifier_details WHERE username = ?";
                db7.query(sqlQuery, username, function (error, results) {
                    const user = results[0];
                    if (user) {
                        // If the user exists, return a JSON object with isLoggedIn set to true and the user's data
                        res.send({
                            isLoggedIn: true,
                            user: {
                                username: user['username'],
                                Password: user.Password,
                                Name: user.Name
                                // Add any other user data you want to expose to the client
                            }
                        });
                    } else {
                        // If the user doesn't exist, return a JSON object with isLoggedIn set to false
                        res.send({
                            isLoggedIn: false
                        });
                    }
                });
            }
        });
    } else {
        res.send("Error: Authentication required. ");
    }
});

app.get("/api/getPersonalDetails", (req, res)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token){
        jwt.verify(token, 'secret-key', function (err, decoded) {
            if(err) console.log(err);
            const Scholar_No = decoded["Scholar No"];
            const year = Scholar_No.substring(0, 2);
            const sqlQuery = "SELECT * FROM students_20" + year + " WHERE `Scholar No` = ?";
            db3.query(sqlQuery, Scholar_No, function (error, results) {
                const user = results[0];
                res.send({user});
            });
        });
    }else{
        res.send("Error: Authentication required. ");
    }
});

app.get("/api/getExperienceDetails", (req, res)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token){
        jwt.verify(token, 'secret-key', function (err, decoded) {
            if(err) console.log(err);
            const Scholar_No = decoded["Scholar No"];
            const year = Scholar_No.substring(0, 2);
            const sqlQuery = "SELECT * FROM students_20" + year + " WHERE `Scholar No` = ? ORDER BY startDate ASC";
            
            db1.query(sqlQuery, Scholar_No, function (error, results) {
                res.send({results});
            });
        });
    }else{
        res.send("Error: Authentication required. ");
    }
});

app.get("/api/getProjectDetails", (req, res)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token){
        jwt.verify(token, 'secret-key', function (err, decoded) {
            if(err) console.log(err);
            const Scholar_No = decoded["Scholar No"];
            const year = Scholar_No.substring(0, 2);
            const sqlQuery = "SELECT * FROM students_20" + year + " WHERE `Scholar No` = ? ORDER BY startDate ASC";
            
            db4.query(sqlQuery, Scholar_No, function (error, results) {
                res.send({results});
            });
        });
    }else{
        res.send("Error: Authentication required. ");
    }
});

app.get("/api/getEducationDetails", (req, res)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token){
        jwt.verify(token, 'secret-key', function (err, decoded) {
            if(err) console.log(err);
            const Scholar_No = decoded["Scholar No"];
            const year = Scholar_No.substring(0, 2);
            const sqlQuery = "SELECT * FROM students_20" + year + " WHERE `Scholar No` = ?";
            
            db5.query(sqlQuery, Scholar_No, function (error, results) {
                res.send({results});
            });
        });
    }else{
        res.send("Error: Authentication required. ");
    }
});

app.get("/api/getAllOpportunities", (req, res)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token){
        jwt.verify(token, 'secret-key', function(err, decoded){
            if(err) console.log(err);
            const Scholar_No = decoded["Scholar No"];
            const db6 = db(Scholar_No);
            const sqlQuery = "SELECT * FROM opportunities ORDER BY endApplyDate ASC";

            db6.query(sqlQuery, function(error, results){
                res.send({results});
            })
        })
    }else{
        res.send("Error: Authentication required.");
    }
})

// start server
app.listen(5000, () => {
    console.log('Server listening on port 5000');
});