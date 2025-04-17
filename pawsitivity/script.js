// Particle background
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json');

// Countdown to reset (midnight)
function updateCountdown() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;

  const hours = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, '0');
  const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  document.getElementById('countdown').innerText = `⏳ Next scratch in ${hours}:${minutes}:${seconds}`;
}
setInterval(updateCountdown, 1000);

// Scroll function
function scrollToReel() {
  document.getElementById('reel').scrollIntoView({ behavior: 'smooth' });
}

// Optional: Pull random quotes or increment day
document.getElementById('day-number').innerText = localStorage.getItem('scratch-day') || 1;

