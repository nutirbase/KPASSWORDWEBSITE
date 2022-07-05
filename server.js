const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT||5001;
app.use(cors());
app.use(express.json());
const db= require("./config/db")


app.get('/api', (req, res) => res.send('Hello world!'));


app.get('/api/getusers', (req,res)=>{

    db.query(`select user from users`, (err, res)=>{if (err){console.log("showing err"+err)};return console.log(res)})
     
});



app.listen(port, () => console.log(`Server running on port ${port}`));
