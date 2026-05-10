var http = require("http");
var express = require ("express");
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = "mongodb://melissabonoto:db2026@ac-dgttusv-shard-00-00.svvktz0.mongodb.net:27017,ac-dgttusv-shard-00-01.svvktz0.mongodb.net:27017,ac-dgttusv-shard-00-02.svvktz0.mongodb.net:27017/?ssl=true&replicaSet=atlas-evqied-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri);

client.connect();

var dbo = client.db("lab9");
var posts = dbo.collection("posts")

var app = express();
app.set('view engine', 'ejs')
app.set('views', './views');

app.use(express.static("./public"));
var server = http.createServer(app);
server.listen(3000);

console.log("Servidor rodando...")

app.get("/postar", function (req, res){
    var data = {
        titulo: req.query.titulo,
        resumo: req.query.resumo,
        conteudo: req.query.conteudo,
    };

    posts.insertOne(data, function (err){
       res.redirect("/blog");
    });

});

app.get("/blog", function(req, res){
    posts.find().toArray(function(err, items){
        res.render("blog.ejs", {
            posts: items
        });

    });

});

