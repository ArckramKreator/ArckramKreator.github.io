const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('header-visible');
    } else {
        header.classList.remove('header-visible');
    }
});
