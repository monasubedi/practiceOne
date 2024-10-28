const sections = [
    {
        title: "Section 1",
        content: "Content for section 1"
    },
    {
        title: "Section 2",
        content: "Content for section 2"
    },
    {
        title: "Section 3",
        content: "Content for section 3"
    }
];


document.addEventListener("DOMContentLoaded", function () {
    const sectionContainer = document.querySelector(".sectionsContainer");
    sections.forEach((section, index) => {
        const sectionItem = document.createElement("div");
        sectionItem.classList.add("section-item");
        const sectionHeader = document.createElement("div");
        sectionHeader.className = "section-header";
        sectionHeader.textContent = section.title;

        const sectionContent = document.createElement("div");
        sectionContent.classList.add("section-content");
        sectionContent.innerHTML = `<span>${section.content}</span>`;

        sectionItem.appendChild(sectionHeader);
        sectionItem.appendChild(sectionContent);

        sectionContainer.appendChild(sectionItem);


    });

    sectionContainer.addEventListener("click", function (event) {
        const header = event.target.closest(".section-header");
        if (!header) return;

        const sectionItems = document.querySelectorAll(".section-item");
        const sectionItem = header.parentNode;
        const isActive = sectionItem.classList.contains("active");
        sectionItems.forEach((item) => {
            item.classList.remove("active");
            const content = item.querySelector(".section-content");
            content.style.display = "none";
        })

        if (!isActive) {
            sectionItem.classList.add("active");
            sectionItem.querySelector(".section-content").style.display = "block";
        }


    })
})