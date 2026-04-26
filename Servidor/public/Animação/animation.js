canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

let bola = {
    x: 150,
    y: 150,
    raio: 20,
    img: new Image()
}

bola.img.src = "ball.png";

function desenhar_arco (arc){
    ctx.drawImage (arc.img, arc.x - arc.raio, arc.y - arc.raio, arc.raio * 2, arc.raio * 2);
}

bola.img.onload = function () {
    desenhar_arco (bola);
}

document.addEventListener("mousemove", function(evento){
    var rect = canvas.getBoundingClientRect();
    var xmouse = evento.clientX - rect.left;
    var ymouse = evento.clientY - rect.top;

    bola.x = xmouse;
    bola.y = ymouse;

    if (bola.x >= 300 - bola.raio) {bola.x = 300 - bola.raio}
    if (bola.x - bola.raio <= 0) {bola.x = bola.raio}
    if (bola.y >= 300 - bola.raio) {bola.y = 300 - bola.raio}
    if (bola.y - bola.raio <= 0) {bola.y = bola.raio} 

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenhar_arco (bola);
}) 

