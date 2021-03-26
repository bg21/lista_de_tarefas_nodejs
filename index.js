const express = require('express');
const path = require('path');
const app = express();





app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "/views"));

app.get("/", function(req, res){
    res.render('index.ejs');
});



app.listen(5000, function(){
    console.log('funcionando');
}); 