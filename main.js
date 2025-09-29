const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('nav-links');

btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded,', String(open));
});