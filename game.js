
let score = 0;

document.getElementById("collectible").addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = "Score: " + score;
  alert("You found a collectible!");
});
