const nav = document.getElementById('main-nav') as HTMLElement | null;

if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            nav.classList.add('nav-visible');
        } else {
            nav.classList.remove('nav-visible');
        }
    });
}
