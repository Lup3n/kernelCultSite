// Optional: Subtle flickering text effect 
const elements = document.querySelectorAll('h2, p');

window.location.href = "https://www.twitch.tv/videos/1100931082";

setInterval(() => {
    elements.forEach(el => {
        el.style.opacity = Math.random() > 0.95 ? 0.5 : 1;
    })
}, 500);
