const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(session({
    secret: "key",
    resave: false,
    saveUninitialized: true,
    cookie:
    {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24

    }
}))


mongoose.connect("mongodb://localhost:27017/Proba_IT")
    .then(() => console.log("Conectat la MongoDB"))
    .catch(err => console.log(err));


const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model("users", UserSchema);



app.post("/login", (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // Save user to session
                    req.session.userId = user._id;
                    req.session.username = user.username;
                    
                    res.json({ status: "Succes", message: "Login OK", user: user });
                } else {
                    res.json({ status: "Error", message: "Parola gresita" });
                }
            } else {
                res.json({ status: "Error", message: "Userul nu exista" });
            }
        });
});

app.get("/check-session", (req, res) => {
    if (req.session.userId) {
        res.json({ 
            isLoggedIn: true, 
            username: req.session.username 
        });
    } else {
        res.json({ isLoggedIn: false });
    }
});



app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.json({ status: "Error", message: "Could not logout" });
        } else {
            res.json({ status: "Succes", message: "Logged out" });
        }
    });
});



    
app.listen(1234, () => {
    console.log("Serverul merge pe portul 1234");
});