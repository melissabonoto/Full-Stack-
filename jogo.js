var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// var fundo = new Image ();
// fundo.src = "fundo.jpg";

// fundo.onload = function () {
//     ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height);
// };

let vida = 3;
ctx.fillStyle = 'black';
ctx.fillText('3', 50, 50, 50, 50)

let player = {
    x: 550,
    y: 300,
    w: 60,
    h: 60,
    tamanho: 2,
    img: new Image()
}

player.img.src = "playerr.png";

player.img.onload = function () {
    ctx.drawImage(player.img, player.x, player.y, player.w, player.h);
}

document.addEventListener("keydown", function(evento){
    var tecla = evento.key;
    console.log(tecla);

var vel = 20;

    if (tecla == "ArrowUp") {player.y -= vel}
    if (tecla == "ArrowDown") {player.y += vel}
    if (tecla == "ArrowLeft") {player.x -= vel}
    if (tecla == "ArrowRight") {player.x += vel}

    if (tecla == "ArrowLeft") {player.img.src = "playerl.png"}
    if (tecla == "ArrowRight") {player.img.src = "playerr.png"}

    if (player.y >= canvas.height - player.h) {player.y = canvas.height - player.h}
    if (player.y <= 0) {player.y = 0}
    if (player.x >= canvas.width - player.w) {player.x = canvas.width - player.w}
    if (player.x <= 0) {player.x = 0}
    

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(player.img, player.x, player.y, player.w, player.h);
})

let inimigos = [];


    for (let i = 0; i < 10; i++){
        inimigos.push({
            x: Math.random() * 1200,
            y: Math.random() * 700,

            w: 50,
            h: 50,

            mov: 2,

            img: new Image()

        });
    }

    inimigos[0].img.src = "peixe7.png";
    inimigos[1].img.src = "peixe10.png";
    inimigos[2].img.src = "peixe9.png";
    inimigos[3].img.src = "peixe4.png";
    inimigos[4].img.src = "peixe5.png";

    for (let i=0; i <inimigos.length; i++){
        let inimigo = inimigos[i];

        ctx.drawImage(inimigo.img, inimigo.x, inimigo.y, inimigo.w, inimigo.h);
    }


// let inimigo1 = {
//     x: 1100,
//     y: 300,
//     w: 60,
//     h: 60,
//     tamanho: 2,
//     img: new Image()
// }

// inimigo1.img.src = "peixe7.png";

// let inimigo2 = {
//     x: 1100,
//     y: 150,
//     w: 15,
//     h: 15,
//     tamanho: 1,
//     img: new Image()
// }

// inimigo2.img.src = "peixe10.png";

// let inimigo3 = {
//     x: 1100,
//     y: 100,
//     w: 15,
//     h: 15,
//     tamanho: 1,
//     img: new Image()
// }

// inimigo3.img.src = "peixe9.png";

// let inimigo4 = {
//     x: 1100,
//     y: 450,
//     w: 100,
//     h: 100,
//     tamanho: 10,
//     img: new Image()
// }

// inimigo4.img.src = "peixe4.png";

// let inimigo5 = {
//     x: 1100,
//     y: 450,
//     w: 320,
//     h: 320,
//     tamanho: 30,
//     img: new Image()
// }

// inimigo5.img.src = "peixe5.png";

// let inimigo6 = {
//     x: 0,
//     y: 100,
//     w: 120,
//     h: 120,
//     tamanho: 15,
//     img: new Image()
// }

// inimigo6.img.src = "peixe-6.png";

// let inimigo7 = {
//     x: 1100,
//     y: 400,
//     w: 150,
//     h: 150,
//     tamanho:20,
//     img: new Image()
// }

// inimigo7.img.src = "peixe3.png";


let mov1 = 1;
let mov2 = 2;
let mov3 = 1;
let mov4 = 1.5;
let mov5 = 2.5;
let mov6 = 1;
let mov7 = 2;

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // inimigo1.x = inimigo1.x - mov1;
    // inimigo2.x = inimigo2.x - mov2;
    // inimigo3.x = inimigo3.x - mov3;
    // inimigo4.x = inimigo4.x - mov4;
    // inimigo5.x = inimigo5.x - mov5;
    // inimigo6.x = inimigo6.x + mov6;
    // inimigo7.x = inimigo7.x - mov7;


    // ctx.drawImage(inimigo1.img, inimigo1.x, inimigo1.y, inimigo1.w, inimigo1.h);
    // ctx.drawImage(inimigo2.img, inimigo2.x, inimigo2.y, inimigo2.w, inimigo2.h);
    // ctx.drawImage(inimigo3.img, inimigo3.x, inimigo3.y, inimigo3.w, inimigo3.h);
    // ctx.drawImage(inimigo4.img, inimigo4.x, inimigo4.y, inimigo4.w, inimigo4.h);
    // ctx.drawImage(inimigo5.img, inimigo5.x, inimigo5.y, inimigo5.w, inimigo5.h);
    // ctx.drawImage(inimigo6.img, inimigo6.x, inimigo6.y, inimigo6.w, inimigo6.h);
    // ctx.drawImage(inimigo7.img, inimigo7.x, inimigo7.y, inimigo7.w, inimigo7.h);

    for (let i=0; i <inimigos.length; i++){
        let inimigo = inimigos[i];

        ctx.drawImage(inimigo.img, inimigo.x, inimigo.y, inimigo.w, inimigo.h);
        inimigo.x = inimigo.x - inimigo.mov
    }


    ctx.drawImage(player.img, player.x, player.y, player.w, player.h)

    let vida = 3;
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Vidas: ', 50, 50);
    ctx.fillText(vida, 150, 50);

     ctx.fillText('Tamanho: ', 550, 50);
     ctx.fillText(player.tamanho, 700, 50);

    

    requestAnimationFrame(desenhar)
}

desenhar();

for (let i=0; i < inimigos.length; i++){
    let inimigo = inimigos[i];

    if (player.x < inimigo.x + inimigo.w && 
        player.x + player.w > inimigo.x &&
        player.y < inimigo.y + inimigo.h &&
        player.y + player.h > inimigo.y
    ){
        if (player.tamanho >= inimigo.tamanho){
            player.tamanho = player.tamanho + inimigo.tamanho
            player.w = player.w + inimigo.tamanho
            player.h = player.h + inimigo.tamanho
        }
        else{
            vida = vida - 1
        }
}}