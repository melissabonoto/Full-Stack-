canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");

//verde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo (0, 250);
ctx.lineTo (500,250);
ctx.stroke();
ctx.arc(250, 250, 50, 0 * Math.PI, 1 * Math.PI);
ctx.stroke();
ctx.fillRect(450, 450, 50, 50);
ctx.closePath();

//amarelo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
ctx.fillRect(0, 450, 50, 50);
ctx.arc(100, 175, 20, 0 * Math.PI, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.moveTo(400,175);
ctx.arc(400, 175, 20, 0 * Math.PI, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

//vermelho
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 50, 50);
ctx.moveTo(50,50);
ctx.lineTo(500,500);
ctx.stroke();
ctx.closePath();

//azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.fillStyle = "blue";
ctx.fillRect(450, 0, 50, 50);
ctx.moveTo(450, 50);
ctx.lineTo(0, 500);
ctx.stroke();
ctx.closePath();

//----------------------------------------------------------------------------------------------------

canvas2 = document.getElementById("canvas2");
ctx2 = canvas2.getContext("2d");






