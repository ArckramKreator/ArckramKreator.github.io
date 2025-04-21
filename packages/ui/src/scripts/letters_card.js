
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = length => Array.from(Array(length)).map(randomChar).join("");

const card = document.querySelector(".card"),
    letters = card.querySelector(".card-letters");


const isTouchDevice = () =>
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

const handleOnMove = e => {
    const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    letters.style.setProperty("--x", `${x}px`);
    letters.style.setProperty("--y", `${y}px`);

    letters.innerText = randomString(1500);
}


// For desktop
if (!isTouchDevice() || window.innerWidth <= 600) {
    card.onmousemove = (e) => handleOnMove(e);
    card.ontouchmove = (e) => handleOnMove(e.touches[0]);
} else {
    // For touch devices
    letters.style.opacity = 1;
    letters.innerText = randomString(1500);

    // Set default x/y center if not moved
    letters.style.setProperty("--x", "50%");
    letters.style.setProperty("--y", "50%");
}

