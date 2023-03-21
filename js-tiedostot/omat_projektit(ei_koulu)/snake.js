// Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Snake
let snake = [
  {x: 10, y: 10},
  {x: 9, y: 10},
  {x: 8, y: 10}
];
let direction = 'right';

// Food
let food = {x: Math.floor(Math.random() * (width/10)) * 10, y: Math.floor(Math.random() * (height/10)) * 10};

// Game loop
function gameLoop() {
  // Move the snake
  let head = {x: snake[0].x, y: snake[0].y};
  if (direction === 'right') head.x++;
  else if (direction === 'left') head.x--;
  else if (direction === 'down') head.y++;
  else if (direction === 'up') head.y--;
  snake.unshift(head);

  // Check for collision with food
  if (head.x === food.x && head.y === food.y) {
    food = {x: Math.floor(Math.random() * (width/10)) * 10, y: Math.floor(Math.random() * (height/10)) * 10};
  } else {
    snake.pop();
  }

  // Check for collision with walls
  if (head.x < 0 || head.x >= width/10 || head.y < 0 || head.y >= height/10) {
    clearInterval(interval);
    alert('Game over!');
  }

  // Check for collision with snake body
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      clearInterval(interval);
      alert('Game over!');
    }
  }

  // Clear the canvas and draw the snake and food
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'green';
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x * 10, snake[i].y * 10, 10, 10);
  }
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, 10, 10);
}

// Event listener for arrow key presses
document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowRight' && direction !== 'left') direction = 'right';
  else if (event.code === 'ArrowLeft' && direction !== 'right') direction = 'left';
  else if (event.code === 'ArrowDown' && direction !== 'up') direction = 'down';
  else if (event.code === 'ArrowUp' && direction !== 'down') direction = 'up';
});

// Start the game loop
let interval = setInterval(gameLoop, 100);
