const track = document.getElementById('track');
const slides = track.querySelectorAll('.carousel-slide');
const dotsEl = document.getElementById('dots');
const curEl = document.getElementById('cur');
let cur = 0, timer;

// Cria os dots
slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => go(i);
    dotsEl.appendChild(d);
});

function go(n) {
    slides[cur].classList.remove('active');
    dotsEl.children[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dotsEl.children[cur].classList.add('active');
    track.style.transform = `translateX(-${cur * 100}%)`;
    curEl.textContent = String(cur + 1).padStart(2, '0');
    reset();
}

function reset() {
    clearInterval(timer);
    timer = setInterval(() => go(cur + 1), 4000);
}

document.getElementById('prev').onclick = () => go(cur - 1);
document.getElementById('next').onclick = () => go(cur + 1);

reset();