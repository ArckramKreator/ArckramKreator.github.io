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