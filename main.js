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
    }
}

const headImage = new Image();
headImage.src = "img/head.png";

const bodyImage = new Image();
bodyImage.src = "img/body.png";

const tailImage = new Image();
tailImage.src = "img/tail.png";

let eaten = false;
const step = function () {
    if ("ArrowUp" in keysDown) {
        snakeHead.direction = Direction.up;
    }
    if ("ArrowDown" in keysDown) {
        snakeHead.direction = Direction.down;
    }
    if ("ArrowLeft" in keysDown) {
        snakeHead.direction = Direction.left;
    }
    if ("ArrowRight" in keysDown) {
        snakeHead.direction = Direction.right;
    }
    
    if (!eaten) {    
        for (let i = snake.length - 1; i >= 1; --i) {
            snake[i].x = snake[i - 1].x;
            snake[i].y = snake[i - 1].y;
        }
    } else {
        snake.splice(1, 0, new SnakeItem(SnakeType.body, snake[0].x, snake[0].y, bodyImage));
        eaten = false;
    }
    switch (snake[0].direction) {
        case Direction.right:
            snake[0].x++;
            break;
        case Direction.left:
            snake[0].x--;
            break;
        case Direction.up:
            snake[0].y--;
            break;
        case Direction.down:
            snake[0].y++;
            break;
    }
    if (food.x == snake[0].x && food.y == snake[0].y) {
        eaten = true;
        generateFoodLocation();
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
snakeHead.direction = Direction.right;
const snake = [snakeHead,
    new SnakeItem(SnakeType.body, 4, 5, bodyImage),
    new SnakeItem(SnakeType.body, 3, 5, bodyImage),
    new SnakeItem(SnakeType.body, 2, 5, bodyImage),
    new SnakeItem(SnakeType.body, 1, 5, bodyImage),
    new SnakeItem(SnakeType.tail, 0, 5, tailImage)
];
const food = {};
food.image = new Image();
food.image.src = "img/food.png";

const generateFoodLocation = function () {
    food.x = Math.floor(Math.random() * canvas.width / 20);
    food.y = Math.floor(Math.random() * canvas.height / 20);
}

generateFoodLocation();

const keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.key] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.key];
}, false);

render();
setInterval(function () {
    step();
    render();
}, 500);
