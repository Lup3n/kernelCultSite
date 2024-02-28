// Optional: Subtle flickering text effect 
const elements = document.querySelectorAll('h2, p');

setInterval(() => {
    elements.forEach(el => {
        el.style.opacity = Math.random() > 0.95 ? 0.5 : 1;
    })
}, 500);
