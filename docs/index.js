// --- arrow.js ---
document.querySelector('.arrow').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});


// --- blob.js ---
const blob = document.getElementById('blob');


let lastX = 0;
let lastY = 0;

let scrollX = window.scrollX;
let scrollY = window.scrollY;
// Update on mouse move
window.onpointermove = event => {
    const { clientX, clientY } = event;

    //lastX = event.pageX;
    //lastY = event.pageY;
    lastX = clientX ;
    lastY = clientY ;

    
    animateBlob(lastX, lastY);

};

// Update on scroll
window.addEventListener("scroll", () => {

    scrollX = window.scrollX;
    scrollY = window.scrollY;

    animateBlob(lastX, lastY);
});

// Update on resize
function animateBlob(x, y) {
    blob.animate(
        {
            left: `${x+scrollX}px`,
            top:  `${y+scrollY}px`
        },
        {
            duration: 3000,
            fill: "forwards"
        }
    );
}

// --- experience.js ---
fetch('/data/experience.json')
    .then(res => res.json())
    .then(data => {
        const container = document.querySelector('.experience-timeline');

        data.forEach(item => {
            const entry = document.createElement('div');
            entry.className = 'experience-entry';

            entry.innerHTML = `
                <div class="title">
                    <div class="fill-content"><h3>${item.position}</h3></div>
                    <h3> - </h3>
                    <div class="fill-content"><h4>${item.company}</h4></div>
                </div>
                <div class="separator"></div>
                <div class="duration">
                    <div class="fill-content"><p class="ini">${item.start}</p></div>
                    <p> - </p>
                    <div class="fill-content"><p class="fin">${item.end}</p></div>
                </div>
                <ul>
                    ${item.details.map(d => `<li><p>${d}</p></li>`).join('')}
                </ul>
            `;

            container.appendChild(entry);
        });
    });


// --- hacker-text.js ---
const chars2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let interval = null;

document.querySelector(".hacker-text").onmouseover = event => {

    let iterations = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }
                return chars2[Math.floor(Math.random() * 62)]

            }).join('');
        
        if (iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iterations += 1/2;
    }, 20);
}



// --- header-scroll.js ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetID);

        if (target) {
            const yOffset = -80; // adjust offset for your header height
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// --- header.js ---
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('header-visible');
    } else {
        header.classList.remove('header-visible');
    }
});


// --- letters_card.js ---

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



// --- skills.js ---
fetch("/data/icons.json")
    .then(res => res.json())
    .then(icons => {
        const skillsGrid = document.querySelector(".skills-grid");
        const iconPath = "/icons/";

        icons.forEach(file => {
            let name = file
                .replace(".svg", "")
                .replace(/[_-]/g, " ")
                .replace(/\b\w/g, c => c.toUpperCase());

            if (file.includes("c_sharp")) name = "C#";

            const card = document.createElement("div");
            card.className = "skill-card";
            card.innerHTML = `
        <img src="${iconPath + file}" alt="${name}" />
        <div class="separator"></div>
        <p>${name}</p>
      `;
            skillsGrid.appendChild(card);
        });
    });