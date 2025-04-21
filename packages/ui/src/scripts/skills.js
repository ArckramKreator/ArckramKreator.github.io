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
