const express = require('express');
const path = require('path');
const app = express();


app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "/views"));

let tarefas = ['Arrumar o quarto -_-', 'outra coisa', 'mais outra tarefa'];



app.get("/", function(req, res){
    res.render('index.ejs', {tarefas: tarefas});
});

app.get("/deletar/:id", function(req, res){
    tarefas = tarefas.filter(function(val, index){
        if(index != req.params.id){
            return val;
        }
    })
    res.render('index.ejs', {tarefas: tarefas});
});



app.listen(5000, function(){
    console.log('funcionando');
}); 