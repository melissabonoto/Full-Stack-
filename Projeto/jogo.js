var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let gameover = false;
let vitoria = false;
let jogoiniciado = false;

var fundo = new Image ();
fundo.src = "imagens/fundo.jpeg";

var logo = new Image();
logo.src = "imagens/logoo.png";

logo.onload = function () {
    ctx.drawImage(logo, 160, -250, 896, 896);
};

var vida = new Image ();
vida.src = "imagens/vida.png";

let player = {
    x: 550,
    y: 300,
    w: 40,
    h: 40,
    tamanho: 1,
    img: new Image()
}

player.img.src = "imagens/playerr.png";

function movimentacao(){
    document.addEventListener("keydown", function(evento){
        if (gameover){
            return;
        }

        if(vitoria){
            return;
        }

        var tecla = evento.key;
        var vel = 20;

        let margem = player.h * 0.2;

        if (tecla == "ArrowUp") {player.y -= vel}
        if (tecla == "ArrowDown") {player.y += vel}
        if (tecla == "ArrowLeft") {player.x -= vel}
        if (tecla == "ArrowRight") {player.x += vel}

        if (tecla == "ArrowLeft") {player.img.src = "imagens/playerl.png"}
        if (tecla == "ArrowRight") {player.img.src = "imagens/playerr.png"}

        if (player.y >= canvas.height - player.h + margem) {player.y = canvas.height - player.h + margem}
        if (player.y <= 90 - margem) {player.y = 90 - margem}
        if (player.x >= canvas.width - player.w) {player.x = canvas.width - player.w}
        if (player.x <= 0) {player.x = 0}

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(player.img, player.x, player.y, player.w, player.h);
    })
}

let inimigos_d = [];
    function criarInimigoDireita(){
        if (player.tamanho == 1){
            var tamanho = 1;
        }

        else if (player.tamanho < 15){
            var tamanho = Math.random() * 20 + 1;
        }

        else if (player.tamanho < 30) {
            var tamanho = Math.random() * 40 + 5;
        }

        else if (player.tamanho < 50)
            var tamanho = Math.random() * 60 + 10;

        else{
            var tamanho = Math.random() * 100 + 20;
        }

            let inimigo = {
                x: canvas.width,
                y: Math.random() * (canvas.height - tamanho - 90) + 90,

                tamanho: tamanho,

                w: tamanho,
                h: tamanho,

                mov: Math.random() * 4 + 1,

                img: new Image()

        };
        if (tamanho < 30){
            inimigo.img.src = `imagens/peixe10.png`;
            inimigo.w += 30;
            inimigo.h += 30;
        }

        else if  (tamanho < 70) {
            inimigo.img.src = `imagens/peixe5.png`;
            inimigo.w += 70;
            inimigo.h += 70;
        }

        else {
            inimigo.img.src = `imagens/peixe2.png`;
            inimigo.w += 150;
            inimigo.h += 150;
        }

        inimigos_d.push(inimigo);

    }

    let inimigos_e = [];
    function criarInimigoEsquerda(){
           if (player.tamanho == 1){
                var tamanho = 1;
            }

            else if (player.tamanho < 15){
                var tamanho = Math.random() * 20 + 1;
            }

            else if (player.tamanho < 30) {
                var tamanho = Math.random() * 40 + 5;
            }

            else if (player.tamanho < 50)
                var tamanho = Math.random() * 70 + 10;

            else{
                var tamanho = Math.random() * 100 + 20;
            }

            let inimigo = {
                x: 0,
                y: Math.random() * (canvas.height - tamanho - 90) + 90,

                tamanho: tamanho,

                w: tamanho,
                h: tamanho,

                mov: Math.random() * 4 + 1,

                img: new Image()

        };

        if (tamanho < 30){
            inimigo.img.src = `imagens/peixe-7.png`;
            inimigo.w += 45;
            inimigo.h += 45;
        }

        else if  (tamanho < 70) {
            inimigo.img.src = `imagens/peixe-4.png`;
            inimigo.w += 60;
            inimigo.h += 60;
        }

        else {
            inimigo.img.src = `imagens/peixe-6.png`;
            inimigo.w += 110;
            inimigo.h += 110;
        }

        inimigos_e.push(inimigo);
    }

    function colidiu(player, inimigo){
        let margem_player = player.w * 0.25;
        let margem_inimigo = inimigo.w * 0.25;

        if(
            player.x + margem_player < inimigo.x + inimigo.w - margem_inimigo &&
            player.x + player.w - margem_player > inimigo.x + margem_inimigo &&
            player.y + margem_player < inimigo.y + inimigo.h - margem_inimigo &&
            player.y + player.h - margem_player > inimigo.y + margem_inimigo
        ){
            return true;
        }

        return false;
}

let cont_vida = 3;
function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameover){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.font = 'bold 75px Trebuchet MS';
        ctx.fillText("GAME OVER!", 390, 280);
        ctx.closePath();

        ctx.font = 'bold 25px Trebuchet MS';
        ctx.fillText("Clique no botão para reiniciar o jogo!", 390, 340);
        ctx.closePath();

        return;
    };

    if (vitoria){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.font = 'bold 70px Trebuchet MS';
        ctx.fillText("Parabéns, você venceu!", 250, 280);
        ctx.closePath();

        ctx.font = 'bold 25px Trebuchet MS';
        ctx.fillText("Clique no botão para reiniciar o jogo!", 400, 345);
        ctx.closePath();

        return;
    };
    
    ctx.shadowColor = "black";
    ctx.shadowBlur = 3;

    ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height);

    for (let i=0; i <inimigos_d.length; i++){

        let inimigo = inimigos_d[i];
        ctx.drawImage(inimigo.img, inimigo.x, inimigo.y, inimigo.w, inimigo.h);
        inimigo.x -= inimigo.mov;

        if(colidiu(player, inimigo)){

            if(player.tamanho >= inimigo.tamanho){

                player.tamanho += 5;

                player.w += 9;
                player.h += 9;

                inimigos_d.splice(i, 1);
                i--;

                if (player.tamanho >= 150){
                    vitoria = true;
                }
            }

            else{

                cont_vida--;

                inimigos_d.splice(i, 1);
                i--;

                if(cont_vida <= 0){
                    gameover = true;
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

                player.tamanho += 5;

                player.w += 9;
                player.h += 9;

                inimigos_e.splice(i, 1);
                i--;

                if (player.tamanho >= 150){
                    vitoria = true;
                }
            }

            else{

                cont_vida--;

                inimigos_e.splice(i, 1);
                i--;

                if(cont_vida <= 0){
                    gameover = true;
                }
            }
        }
    }

    ctx.drawImage(player.img, player.x, player.y, player.w, player.h);

    ctx.beginPath();
    ctx.fillStyle = "steelblue";
    ctx.globalAlpha = 0.65;
    ctx.shadowBlur = 0;
    ctx.fillRect(0, 0, canvas.width, 90);
    ctx.globalAlpha = 1;
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.8;
    ctx.roundRect(870, 20, 100, 60, 5);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.closePath();


    ctx.beginPath();
    ctx.font = 'bold 30px Trebuchet MS';
    ctx.fillStyle = 'black';
    ctx.shadowBlur = 1;

    ctx.fillText('Tamanho ', 720, 60);
    ctx.fillText(player.tamanho, 900, 60);
    ctx.closePath();

    ctx.shadowColor = "black";
    ctx.shadowBlur = 3;

    if (cont_vida == 3){
        ctx.drawImage(vida, 30, 20, 64, 64);
        ctx.drawImage(vida, 100, 20, 64, 64);
        ctx.drawImage(vida, 170, 20, 64, 64);
    }
    else if (cont_vida == 2){
        ctx.drawImage(vida, 30, 20, 64, 64);
        ctx.drawImage(vida, 100, 20, 64, 64);
    }
    else if (cont_vida == 1) {
        ctx.drawImage(vida, 30, 20, 64, 64);
    }

    requestAnimationFrame(desenhar);
}

function jogo(){
    if(gameover){
        location.reload();
        return;
    };

    if (vitoria){
        location.reload();
        return;
    };

    if (jogoiniciado){
        return;
    };

    jogoiniciado = true;

    movimentacao();

    setInterval(function(){
        if (!document.hidden) {
            criarInimigoDireita();
        }
    },2000);
    
    setInterval(function(){
        if (!document.hidden) {
            criarInimigoEsquerda();
        }
    },3000);

    desenhar()
    
}
