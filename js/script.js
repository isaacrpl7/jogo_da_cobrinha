let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;//int que representa a quantidade de pixeis de cada quadradinho
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);//altura de 16 quadradinhos com o tamanho de 32 pixeis cada
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++){//para cada elemento da cobrinha, desenhe um quadrado verde iniciando no x e y do elemento, de tamanho 32px (box)
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();
    
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);