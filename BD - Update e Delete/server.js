var http = require ("http");
var express = require ("express");
var app = express();
var mongodb = require ("mongodb");
var bodyParser = require("body-parser");
const { isNumberObject } = require("util/types");

const MongoClient = mongodb.MongoClient;
const uri = "mongodb://melissabonoto:db2026@ac-dgttusv-shard-00-00.svvktz0.mongodb.net:27017,ac-dgttusv-shard-00-01.svvktz0.mongodb.net:27017,ac-dgttusv-shard-00-02.svvktz0.mongodb.net:27017/?ssl=true&replicaSet=atlas-evqied-shard-0&authSource=admin&appName=Cluster0"
const client = new MongoClient (uri); 

client.connect();

var dbo = client.db("lab10");
var usuarios = dbo.collection("usuarios");
var carros = dbo.collection("carros");

app.set('view engine', 'ejs')
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("./public"));

var server = http.createServer(app);
server.listen(80)

console.log("Servidor rodando...")

app.get("/", function(req, res){
    res.redirect("cadastro.html")
})

//usuarios
app.post("/cadastrar", function(req, resp) {
    var data ={
        db_nome: req.body.nome,
        db_email: req.body.email,
        db_senha: req.body.senha
    };

    usuarios.insertOne(data, function (err){
        if (err) {
        resp.render('resposta', {resposta: "Erro ao cadastrar usuário!"})
        }else {
        resp.render('resposta', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });
});

app.post("/logar", function(req,resp) {
    var data = { 
        db_login: req.body.login, 
        db_senha: req.body.senha 
    };

    usuarios.find(data).toArray(function (err, items){
        if (items.length == 0) {
        resp.render('resposta', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta', {resposta: "Erro ao logar usuário!"})
      }else {
        resp.redirect("/carros")
      };

    });

});

//cadastrar carro
app.get("/cadastrar_carro", function (req, resp){
  var data = {
    db_marca: req.query.marca,
    db_modelo: req.query.modelo,
    db_ano: req.query.ano,
    db_qtde: Number(req.query.qtde)
  }

  carros.insertOne(data, function (err) {
    resp.redirect("/carros")
  });

});

app.get("/carros", function(req, res){
    carros.find().toArray(function(err, items){
        res.render("carros.ejs", {
            carros: items
        });

    });

});

//remover carros
app.get("/remover", function (req, resp){
  var id = req.query.id

  carros.deleteOne(
    {_id: new mongodb.ObjectId(id)}, function(err, result){
    resp.redirect("/carros");
  });
});

//vender carros
app.get("/vender", function (req,resp){
  var id = req.query.id

  carros.findOne(
    {_id: new mongodb.ObjectId(id)}, function(err, item){
      if(item.db_qtde > 0){

        carros.updateOne(
          {_id: new mongodb.ObjectId(id)},
          {$inc: {db_qtde: -1 }
        }
        );
      }

    resp.redirect("/carros");

  });
});

//página atualizar carros 
app.get("/atualizar", function (req,resp){
  var id = req.query.id

  carros.findOne(
    {_id: new mongodb.ObjectId(id)}, function (err, item){
      resp.render("atualizar_carro.ejs", {carro: item})
    }
  )
});

//atualizar carros
app.post("/atualizar_carro", function(req, resp){
  var id = req.body.id;
  var newData = {$set: {db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qtde: Number(req.body.qtde)}};

  carros.updateOne(
    {
      _id: new mongodb.ObjectId(id)
  },
  newData, function (err, result){
    resp.redirect("/carros");
   }
)
})


