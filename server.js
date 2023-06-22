const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Americo's backend application");
});

app.get("/americo",(req,res)=>{
    res.send("Hello Americo!");
})

app.listen(3000,()=>{
    console.log("Listening");
});