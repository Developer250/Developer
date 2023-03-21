const mazeContainer = document.getElementById("maze-container");
const player = document.createElement("div");
player.className = "player";
player.style.left = "0";
player.style.top = "0";
mazeContainer.appendChild(player);

// define maze walls
const maze = [
  "##########",
  "#        #",
  "# ###### #",
  "# #    # #",
  "# # ## # #",
  "# #    # #",
  "# ###### #",
  "#        #",
  "##########",
];

for (let i = 0; i < maze.length; i++) {
  const row = maze[i];
  for (let j = 0; j < row.length; j++) {
    if (row.charAt(j) === "#") {
      const wall = document.createElement("div");
      wall.className = "wall";
      wall.style.left = j * 50 + "px";
      wall.style.top = i * 50 + "px";
      mazeContainer.appendChild(wall);
    }
  }
}

// move player with arrow keys
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      player.style.top = parseInt(player.style.top) - 50 + "px";
      break;
    case "ArrowDown":
      player.style.top = parseInt(player.style.top) + 50 + "px";
      break;
    case "ArrowLeft":
      player.style.left = parseInt(player.style.left) - 50 + "px";
      break;
    case "ArrowRight":
      player.style.left = parseInt(player.style.left) + 50 + "px";
      break;
  }
});
