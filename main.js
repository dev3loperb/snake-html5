let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");

clearCanvas(canvas);

ctx.fillStyle = "red";
ctx.globalAlpha = 0.3;
ctx.fillRect(0, 0, canvas.width, canvas.height);

function clearCanvas(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}