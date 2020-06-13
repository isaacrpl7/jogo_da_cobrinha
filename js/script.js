let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;//int que representa a quantidade de pixeis de cada quadradinho
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {//mudança de direção conforme a tecla
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {//esse código irá rodar varias vezes a cada 100ms
    /**
     * Vai fazer condicionais para caso a cobrinha saia do plano
     * Vai desenhar o background e desenhar a cobrinha,
     * criar duas variáveis para guardarem o valor inicial x e y da cobrinha
     * fazer condicionais para a nova direção da cobrinha
     * remover do array um elemento para depois adicionar o novo
     */
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y) {//se a posição da cobrinha não for igual à comida, continua removendo
        snake.pop();
    } else {//senão, a posição da cobrinha vai para outra aleatória
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
    
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);