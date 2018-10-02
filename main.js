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

class SnakeItem {
    constructor(type, x, y, image) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.image = image;
    }
}

var headImage = new Image();
headImage.src = "img/head.png";

var bodyImage = new Image();
bodyImage.src = "img/body.png";

var tailImage = new Image();
tailImage.src = "img/tail.png";

var step = function () {

};

var render = function () {
    console.log("rendering");
    for (var i in snake) {
        ctx.drawImage(snake[i].image, snake[i].x * 10, snake[i].y * 10);
    }
};

var SnakeType = {"head": 1, "body": 2, "tail": 3};
var Direction = {"up": 1, "left": 2, "down": 3, "right": 4};
var snakeHead = new SnakeItem(SnakeType.head, 10, 10, headImage);
snakeHead.direction = Direction.right;
var snake = [snakeHead, new SnakeItem(SnakeType.body, 9, 10, bodyImage), new SnakeItem(SnakeType.tail, 8, 10, tailImage)];

render();
setInterval(function () {
    step();
    render();
}, 1000);
