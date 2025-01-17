document.addEventListener("DOMContentLoaded", () => {
    const starLayer = document.querySelector(".star-layer");
  
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = `star ${
        ["hexagon", "diamond", "circle"][Math.floor(Math.random() * 3)]
      }`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starLayer.appendChild(star);
    }
  });
  
  const music = document.getElementById("background-music");
  const muteButton = document.getElementById("mute-toggle");
  
  muteButton.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      muteButton.textContent = "🔊";
    } else {
      music.pause();
      muteButton.textContent = "🔇";
    }
  });
  