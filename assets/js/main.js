/* ─── CURSOR ─── */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animateCursor() {
  dot.style.left  = mx + 'px';
  dot.style.top   = my + 'px';
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ─── HEADER SCROLL ─── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── HERO WORD SLIDE-UP ─── */
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.hero-name .word').forEach(w => w.classList.add('visible'));
  }, 200);
});

/* ─── INTERSECTION OBSERVER REVEALS ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  revealObserver.observe(el);
});

/* ─── PROJECT ROW EXPAND ─── */
document.querySelectorAll('.project-item').forEach(item => {
  item.querySelector('.project-row').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.project-item.open').forEach(o => o.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ─── HERO PARALLAX ─── */
const heroImg = document.querySelector('.hero-right img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    heroImg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
  }, { passive: true });
}

/* ─── MAGNETIC BUTTON ─── */
const ctaBtn = document.getElementById('cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('mousemove', e => {
    const r = ctaBtn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width  / 2;
    const y = e.clientY - r.top  - r.height / 2;
    ctaBtn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  });
  ctaBtn.addEventListener('mouseleave', () => {
    ctaBtn.style.transform = 'translate(0,0)';
    ctaBtn.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1), color .3s';
  });
  ctaBtn.addEventListener('mouseenter', () => {
    ctaBtn.style.transition = 'transform .1s linear, color .3s';
  });
}
