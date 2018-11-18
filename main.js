let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
canvas.width = 0.5 * window.innerWidth;
canvas.height = 0.5 * window.innerHeight;

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
        this.direction = Direction.right;
    }
}

const headImage = new Image();
headImage.src = "img/head.png";

const bodyImage = new Image();
bodyImage.src = "img/body.png";

const tailImage = new Image();
tailImage.src = "img/tail.png";

const step = function () {
    for (let index in snake) {
        switch (snake[index].direction) {
            case Direction.right:
                console.log("RIGHT");
                snake[index].x++;
                break;
            case Direction.left:
                snake[index].x--;
                break;
        }
    }
};

const render = function () {
    console.log("rendering");
    clearCanvas(canvas);
    for (let index in snake) {
        ctx.drawImage(snake[index].image, snake[index].x * 20, snake[index].y * 20);
    }
    ctx.drawImage(food.image, food.x * 20, food.y * 20);
};

const SnakeType = {"head": 1, "body": 2, "tail": 3};
const Direction = {"up": 1, "left": 2, "down": 3, "right": 4};
const snakeHead = new SnakeItem(SnakeType.head, 5, 5, headImage);
const snake = [snakeHead, new SnakeItem(SnakeType.body, 4, 5, bodyImage), new SnakeItem(SnakeType.tail, 3, 5, tailImage)];
const food = {};
food.image = new Image();
food.image.src = "img/food.png";
food.x = Math.random() * canvas.width / 20;
food.y = Math.random() * canvas.height / 20;

render();
setInterval(function () {
    step();
    render();
}, 500);