const express = require("express");

const app = express();


//rotas#1
app.get("/", function(req, res){
    // res.send();
    res.sendFile(__dirname + "/index.html");
});

//rotas#2
app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/about.html");
});

app.listen(8081, function(){
    console.log("Servidor Ativado!");
});