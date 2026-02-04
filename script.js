const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

// Fade-in function
function fadeInAudio(audio, duration = 2000) {
  audio.volume = 0;
  const step = 0.05;
  const intervalTime = duration * step;
  const fade = setInterval(() => {
    if (audio.volume < 1) {
      audio.volume = Math.min(audio.volume + step, 1);
    } else {
      clearInterval(fade);
    }
  }, intervalTime);
}

// Yes button click → play music then navigate
yesBtn.addEventListener("click", () => {
  music.play().then(() => {
    fadeInAudio(music);

    // Delay navigation just enough for audio to start
    setTimeout(() => {
      window.location.href = "yes.html";
    }, 400); // 0.4 seconds
  }).catch(() => {
    // If somehow blocked, still navigate
    window.location.href = "yes.html";
  });
});

// No button hover movement
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
