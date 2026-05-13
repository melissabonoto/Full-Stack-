var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// var fundo = new Image ();
// fundo.src = "fundo.jpg";

// fundo.onload = function () {
//     ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height);
// };

let player = {
    x: 550,
    y: 300,
    w: 60,
    h: 60,
    tamanho: 50,
    img: new Image()
}

player.img.src = "playerr.png";

player.img.onload = function () {
    ctx.drawImage(player.img, player.x, player.y, player.w, player.h);
}

document.addEventListener("keydown", function(evento){
    var tecla = evento.key;
    console.log(tecla);

if (player.tamanho < 30){
    var vel = 50;
}

else if (player.tamanho < 60 ){
    var vel = 40;
}

else {
    var vel = 30;
}

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

let inimigos_d = [];
    function criarInimigoDireita(){
            let tamanho = Math.random() * 60 + 30;

            let inimigo = {
                x: canvas.width,
                y: Math.random() * (canvas.height - tamanho),

                tamanho: tamanho,

                w: tamanho,
                h: tamanho,

                mov: Math.random() * 4 + 1,

                img: new Image()

        };
        if (tamanho < 55){
            inimigo.img.src = `peixe10.png`;
        }
        else if  (tamanho < 80) {
            inimigo.img.src = `peixe5.png`;
            inimigo.w += 80;
            inimigo.h += 80;
        }
        else {
            inimigo.img.src = `peixe2.png`;
            inimigo.w += 150;
            inimigo.h += 150;
        }

        inimigos_d.push(inimigo);

    }

    let inimigos_e = [];
    function criarInimigoEsquerda(){
            let tamanho = Math.random() * 60 + 30;

            let inimigo = {
                x: 0,
                y: Math.random() * (canvas.height - tamanho),

                tamanho: tamanho,

                w: tamanho,
                h: tamanho,

                mov: Math.random() * 4 + 1,

                img: new Image()

        };
        if (tamanho < 50){
            inimigo.img.src = `peixe-7.png`;
            inimigo.w += 15;
            inimigo.h += 15;
        }
        else if  (tamanho < 80) {
            inimigo.img.src = `peixe-4.png`;
            inimigo.w += 80;
            inimigo.h += 80;
        }
        else {
            inimigo.img.src = `peixe-6.png`;
            inimigo.w += 90;
            inimigo.h += 90;
        }

        inimigos_e.push(inimigo);
    }

    setInterval(criarInimigoDireita, 3000);
    setInterval(criarInimigoEsquerda, 4000);

function colidiu(player, inimigo){

    if(
        player.x < inimigo.x + inimigo.w &&
        player.x + player.w > inimigo.x &&
        player.y < inimigo.y + inimigo.h &&
        player.y + player.h > inimigo.y
    ){
        return true;
    }

    return false;
}

let vida = 3;
function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i=0; i <inimigos_d.length; i++){

        let inimigo = inimigos_d[i];
        ctx.drawImage(inimigo.img, inimigo.x, inimigo.y, inimigo.w, inimigo.h);
        inimigo.x -= inimigo.mov;

        if(colidiu(player, inimigo)){

            if(player.tamanho >= inimigo.tamanho){

                player.tamanho += 2;

                player.w += 5;
                player.h += 5;

                inimigos_d.splice(i, 1);
                i--;
            }

            else{

                vida--;

                inimigos_d.splice(i, 1);
                i--;

                if(vida <= 0){
                    alert("Game Over");
                    location.reload();
                }
            }
        }
    }

    for (let i=0; i <inimigos_e.length; i++){

        let inimigo = inimigos_e[i];

        ctx.drawImage(inimigo.img, inimigo.x, inimigo.y, inimigo.w, inimigo.h);

        inimigo.x += inimigo.mov;

        if(colidiu(player, inimigo)){

            if(player.tamanho >= inimigo.tamanho){

                player.tamanho += 2;

                player.w += 5;
                player.h += 5;

                inimigos_e.splice(i, 1);
                i--;
            }

            else{

                vida--;

                inimigos_e.splice(i, 1);
                i--;

                if(vida <= 0){
                    alert("Game Over");
                    location.reload();
                }
            }
        }
    }

    ctx.drawImage(player.img, player.x, player.y, player.w, player.h);

    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';

    ctx.fillText('Vidas: ', 50, 50);
    ctx.fillText(vida, 150, 50);

    ctx.fillText('Tamanho: ', 550, 50);
    ctx.fillText(player.tamanho, 700, 50);

    requestAnimationFrame(desenhar);
}

desenhar();