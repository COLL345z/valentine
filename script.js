const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");
const heartsContainer = document.getElementById("hearts-container");

// Start music on first tap (mobile restriction)
document.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

// Yes button → second page
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

// No button evades cursor
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Floating hearts effect
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heartsContainer.appendChild(heart);

  let speed = 1 + Math.random() * 2;
  let scale = 0.5 + Math.random() * 0.5;
  heart.style.transform += ` scale(${scale})`;

  function animate() {
    let top = parseFloat(heart.style.top);
    if (top < -30) {
      heart.remove();
    } else {
      heart.style.top = top - speed + "px";
      requestAnimationFrame(animate);
    }
  }
  animate();
}

// Generate hearts periodically
setInterval(createHeart, 500);
