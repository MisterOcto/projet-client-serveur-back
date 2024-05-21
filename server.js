const express = require("express");
const connectDB = require('./config/database');
const dotenv = require('dotenv').config();
const port = 3000;

connectDB().then(r => console.log("Base de données mangoDB connecté !"));
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/post", require("./routes/beer.routes.js"));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});