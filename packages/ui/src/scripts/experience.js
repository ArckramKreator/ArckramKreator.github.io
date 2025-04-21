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
