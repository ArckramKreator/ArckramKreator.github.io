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

