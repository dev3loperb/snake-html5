let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");

clearCanvas(canvas);

ctx.fillStyle = "green";
let oldGlobalAlpha = ctx.globalAlpha
ctx.globalAlpha = 0.1;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.globalAlpha = oldGlobalAlpha;


function clearCanvas(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

class SnakeItem {
    constructor(type, x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }
}

const headImage = new Image();
headImage.src = "img/head.png";

const bodyImage = new Image();
bodyImage.src = "img/body.png";

const tailImage = new Image();
tailImage.src = "img/tail.png";

const step = function () {

};

const render = function () {
    console.log("rendering");
    for (const i in snake) {
        let width = snake[i].image.width
        let height = snake[i].image.height
        ctx.drawImage(snake[i].image, snake[i].x * width, snake[i].y * height);
    }
};

const SnakeType = {"head": 1, "body": 2, "tail": 3};
const Direction = {"up": 1, "left": 2, "down": 3, "right": 4};
const snakeHead = new SnakeItem(SnakeType.head, 7, 2, headImage);
snakeHead.direction = Direction.right;
const snake = [snakeHead,
    new SnakeItem(SnakeType.body, 6, 2, bodyImage),
    new SnakeItem(SnakeType.body, 5, 2, bodyImage),
    new SnakeItem(SnakeType.body, 4, 2, bodyImage),
    new SnakeItem(SnakeType.tail, 3, 2, tailImage)
];

render();
setInterval(function () {
    step();
    render();
}, 1000);
