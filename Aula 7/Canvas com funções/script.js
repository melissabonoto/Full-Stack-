canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");

function desenhar_quadrado (x, y, lado1, lado2, corlinha, corpreenchimento) {
    ctx.beginPath();
    ctx.strokeStyle = corlinha;
    ctx.fillStyle = corpreenchimento;
    ctx.lineWidth = 1;
    ctx.fillRect(x, y, lado1, lado2);
    ctx.strokeRect(x, y, lado1, lado2);
    ctx.closePath();
};

function desenhar_linha (x0, y0, x, y, corlinha) {
    ctx.beginPath();
    ctx.strokeStyle = corlinha;
    ctx.moveTo (x0, y0);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
};

function desenhar_arco (x, y, raio, angulo1, angulo2, corlinha, corpreenchimento) {
    ctx.beginPath();
    ctx.strokeStyle = corlinha;
    ctx.fillStyle = corpreenchimento;
    ctx.lineWidth = 1;
    ctx.arc (x, y, raio, angulo1, angulo2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

function escrever (texto, x, y, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.font = "20px Arial";
    ctx.filltext(texto, x, y);
    ctx.closePath();
};

desenhar_quadrado (0, 0, 50, 50, "blue", "blue");
desenhar_quadrado (250, 0, 50, 50, "red", "red");
