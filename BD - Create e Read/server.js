var http = require("http");
var express = require ("express");
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://melissabonoto:db2026@cluster0.svvktz0.mongodb.net/?appName=Cluster0";
const client = newMongoClient(uri, {useNewUrlParser: true});

var dbo = client.db("lab9_cr");
var posts = dbo.collection("posts")

var app = express();

app.use(express.static("./public"));
var server = http.createServer(app);
server.listen(3000);

app.get("/postar", function (req, res){
    var data = {
        titulo: req.query.titulo,
        resumo: req.query.resumo,
        conteudo: req.query.conteudo,
    };


});

