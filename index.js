const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
let timerId;

const userStart = [230, 10];
let currPosition = userStart;

const ballStart = [270, 30];
let ballCurrPosition = ballStart;

// create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// All Blocks
const blocks = [
    // first row
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    // second row
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    // third row
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
];

// draw all blocks
function addBlocks() {
    for(let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');

        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';

        grid.appendChild(block);
    }
}

addBlocks();

// add user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);

// draw user
function drawUser() {
    user.style.left = currPosition[0] + 'px';
    user.style.bottom = currPosition[1] + 'px';
}

// draw the ball
function drawBall() {
    ball.style.left = ballCurrPosition[0] + 'px';
    ball.style.bottom = ballCurrPosition[1] + 'px';
}

// move user
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if(currPosition[0] > 0) {
                currPosition[0] -= 10; 
                drawUser();
            }
            break;
        case 'ArrowRight':
            if(currPosition[0] < boardWidth - blockWidth) {
                currPosition[0] += 10; 
                drawUser();
            }
            break;
    }
}
document.addEventListener('keydown', moveUser);

// add ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

// move the ball
function moveBall() {
    ballCurrPosition[0] += 2;
    ballCurrPosition[1] += 2;
    drawBall();
}
timerId = setInterval(moveBall, 30);