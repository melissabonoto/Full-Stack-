var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let player = {
    x: 100,
    y: 250,
    w: 150,
    h: 150,
    img: new Image()
}

player.img.src = "imagens/player_s.png";

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

    if (player.y >= canvas.height - player.h) {player.y = canvas.height - player.h}
    if (player.y <= 0) {player.y = 0}
    if (player.x >= canvas.width - player.w) {player.x = canvas.width - player.w}
    if (player.x <= 0) {player.x = 0}
    

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(player.img, player.x, player.y, player.w, player.h);
})

