var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

var server = http.createServer (app);

server.listen(3000);
console.log("Servidor rodando")

let usuarios = []

app.get("/cadastro", function(req, res){
    res.redirect('/cadastro.html');
})

app.post("/cadastro", function(req, res){
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;

    usuarios.push([email,senha])

    res.render("resposta.ejs", 
         {resposta: "Usuário cadastrado com sucesso!"});

});

app.post("/login", function(req, res){
    var email = req.body.email;
    var senha = req.body.senha;

    encontrado = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i][0] == email && usuarios[i][1] == senha){
            encontrado = true;
            break;
        }
    }

    if (encontrado){
        res.render("resposta.ejs", 
        {resposta: "Usuário logado com sucesso"});
    }

    else{
        res.render("resposta.ejs", 
        {resposta: "Usuário não encontrado!"});
    };

});