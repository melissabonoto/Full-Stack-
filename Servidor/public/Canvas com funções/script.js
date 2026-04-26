canvas1 = document.getElementById("canvas1");
ctx1 = canvas1.getContext("2d");

//funções

function desenhar_quadrado (ctx, x, y, lado1, lado2, corlinha, corpreenchimento) {
    ctx.beginPath();
    ctx.strokeStyle = corlinha;
    ctx.fillStyle = corpreenchimento;
    ctx.lineWidth = 1;
    ctx.fillRect(x, y, lado1, lado2);
    ctx.strokeRect(x, y, lado1, lado2);
    ctx.closePath();
};

function desenhar_linha (ctx, x0, y0, x, y, corlinha) {
    ctx.beginPath();
    ctx.strokeStyle = corlinha;
    ctx.moveTo (x0, y0);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
};

function desenhar_arco (ctx, x, y, raio, angulo1, angulo2, corlinha, corpreenchimento) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo (x, y);
    ctx.arc (x, y, raio, angulo1, angulo2);
 
    if (corpreenchimento) {
        ctx.fillStyle = corpreenchimento
        ctx.fill();
    }
    
    if (corlinha) {
        ctx.strokeStyle = corlinha;
        ctx.stroke();
    }

    ctx.closePath();
};

function escrever (ctx, texto, x, y, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.font = "20px Arial";
    ctx.fillText(texto, x, y);
    ctx.closePath();
};

//quadrados

desenhar_quadrado (ctx1, 0, 0, 50, 50, "blue", "blue");
desenhar_quadrado (ctx1, 250, 0, 50, 50, "red", "red");
desenhar_quadrado (ctx1, 0, 120, 30, 60, "aqua", "aqua");
desenhar_quadrado (ctx1, 270, 135, 30, 30, "aqua", "aqua");
desenhar_quadrado (ctx1, 0, 240, 30, 70, "yellow", "yellow");
desenhar_quadrado (ctx1, 30, 270, 30, 30, "yellow", "yellow");
desenhar_quadrado (ctx1, 270, 240, 30, 70, "black", "black");
desenhar_quadrado (ctx1, 240, 270, 30, 30, "black", "black");
desenhar_quadrado (ctx1, 110, 150, 40, 40, "red", "red");

//linhas

desenhar_linha (ctx1, 0, 150, 300, 150, "green");
desenhar_linha (ctx1, 50, 50, 150, 150, "blue");
desenhar_linha (ctx1, 250, 50, 150, 150, "red");
desenhar_linha (ctx1, 150, 150, 150, 190, "black");
desenhar_linha (ctx1, 150, 190, 150, 300, "grey");

//arcos
desenhar_arco (ctx1, 150, 300, 40, 1 * Math.PI, 2 * Math.PI, "green", "aqua");
desenhar_arco (ctx1, 150, 300, 60, 1.5 * Math.PI, 2 * Math.PI, "green", null);
desenhar_arco (ctx1, 150, 300, 80, 1 * Math.PI, 1.5 * Math.PI, "green", null);
desenhar_arco (ctx1, 70, 210, 15, 0 * Math.PI, 2 * Math.PI, "green", "yellow");
desenhar_arco (ctx1, 70, 210, 15, 0 * Math.PI, 2 * Math.PI, "green", "yellow");
desenhar_arco (ctx1, 230, 210, 15, 0 * Math.PI, 2 * Math.PI, "green", "yellow");
desenhar_arco (ctx1, 150, 150, 60, 1 * Math.PI, 2 * Math.PI, "green", null);
desenhar_arco (ctx1, 150, 150, 80, 1 * Math. PI, 1.25 * Math.PI, "green", null);
desenhar_arco (ctx1, 150, 150, 80, 1.75 * Math. PI, 2 * Math.PI, "green", null);
desenhar_arco (ctx1, 150, 115, 15, 0 * Math.PI, 2 * Math.PI, "blue", "aqua");

//textos
escrever (ctx1, "Canvas", 115, 45, "black");

//----------------------------------------------------------------------------------------------------------------------
canvas2 = document.getElementById("canvas2");
ctx2 = canvas2.getContext("2d");

desenhar_quadrado (ctx2, 0, 220, 300, 80, "gray", "gray");
desenhar_arco (ctx2, 230, 70, 40, 0 * Math.PI, 2 * Math.PI, "yellow", "yellow");

//casa
desenhar_quadrado (ctx2, 110, 130, 80, 90, "saddlebrown", "saddlebrown");
desenhar_quadrado (ctx2, 118, 153, 22, 22, "deepskyblue", "deepskyblue");
desenhar_quadrado (ctx2, 161, 153, 22, 22, "deepskyblue", "deepskyblue");
desenhar_quadrado (ctx2, 142, 175, 16, 45, "hsl(31.43 47.37% 26.08%)", "hsl(31.43 47.37% 26.08%)");

//telhado
ctx2.beginPath();
ctx2.strokeStyle = "coral";
ctx2.fillStyle = "coral";
ctx2.moveTo (110, 130);
ctx2.lineTo(190, 130);
ctx2.lineTo(150, 90);
ctx2.lineTo(110, 130);
ctx2.fill();
ctx2.closePath();

//cachoeira
desenhar_arco (ctx2, 0, 220, 40, 1.5 * Math.PI, 2 * Math.PI, "dodgerblue", "dodgerblue");
desenhar_quadrado (ctx2, 0, 220, 40, 80, "dodgerblue", "dodgerblue");
desenhar_quadrado (ctx2, 0, 260, 110, 50, "dodgerblue", "dodgerblue");
desenhar_arco (ctx2, 110, 300, 40, 1.5 * Math.PI, 2 * Math.PI, "dodgerblue", "dodgerblue");

//árvores
desenhar_quadrado (ctx2, 41, 180, 15, 40, "saddlebrown", "saddlebrown");
desenhar_arco (ctx2, 48, 170, 22, 0 * Math.PI, 2 * Math.PI, "green", "green");
desenhar_quadrado (ctx2, 250, 215, 15, 40, "saddlebrown", "saddlebrown");
desenhar_arco (ctx2, 258, 205, 22, 0 * Math.PI, 2 * Math.PI, "green", "green");
