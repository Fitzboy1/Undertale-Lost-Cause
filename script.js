// ---------- Interactive Background ----------
const body = document.body;
let mouseHue = 0;
let scrollHueShift = 0;
let drift = 0;

// Update background based on mouse, scroll, and drift
function updateBackground() {
  const light = 45 + scrollHueShift * 0.1;
  const hue = (mouseHue + drift) % 360;
  body.style.background = `linear-gradient(120deg, hsl(${hue}, 70%, ${light}%), hsl(${(hue + 60) % 360}, 70%, ${light - 10}%))`;
  body.style.filter = `hue-rotate(${scrollHueShift}deg)`;
}

// Drift animation loop
function animateDrift() {
  drift = (drift + 0.2) % 360; // adjust speed here
  updateBackground();
  requestAnimationFrame(animateDrift);
}
animateDrift();

// Mouse moves -> update hue
document.addEventListener('mousemove', e => {
  mouseHue = Math.round((e.clientX / window.innerWidth) * 360);
});

// Scroll -> hue shift
window.addEventListener('scroll', () => {
  scrollHueShift = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 120);
});

// ---------- Discord Profile ----------
const userId = "1050845532488220855";
const avatar = document.getElementById("discord-avatar");
const name = document.getElementById("discord-name");

// Set Discord avatar and username
avatar.src = `https://cdn.discordapp.com/avatars/${userId}/avatar.png?size=128`;
name.textContent = "FriskLife";

// Fallback if avatar fails
avatar.onerror = () => {
  avatar.src = "https://cdn.discordapp.com/embed/avatars/0.png";
};
