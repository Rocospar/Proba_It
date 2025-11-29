const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Proba_IT")
    .then(() => console.log("Conectat la MongoDB"))
    .catch(err => console.log(err));

// 1. Definim Schema (Cum arată un user)
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model("users", UserSchema);

// 2. Ruta de Login (Asta lipsea!)
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "Succes", message: "Login OK", user: user });
                } else {
                    res.json({ status: "Error", message: "Parola gresita" });
                }
            } else {
                res.json({ status: "Error", message: "Userul nu exista" });
            }
        });
});

app.listen(1234, () => {
    console.log("Serverul merge pe portul 1234");
});