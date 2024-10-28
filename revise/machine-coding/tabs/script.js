const tabs = [
    {
        id: "tab1",
        title: "Tab 1",
        content: "This is tab one"
    },
    {
        id: "tab2",
        title: "Tab 2",
        content: "This is tab two"
    },
    {
        id: "tab3",
        title: "Tab 3",
        content: "This is tab Three"
    }
]

document.addEventListener("DOMContentLoaded", function () {
    const tabsContainer = document.querySelector(".tabsContainer");
    const tabsContent = document.querySelector(".tabsContent");
    let activeTab = tabs[0].id;

    function renderTabs() {
        tabs.forEach((tab) => {
            let tabButton = document.createElement("button");
            tabButton.className = "tabLinks";
            tabButton.setAttribute("data-tab", tab.id);
            tabButton.textContent = tab.title;
            tabsContainer.appendChild(tabButton);

            let tabContent = document.createElement("div");
            tabContent.className = "tabContent";
            tabContent.id = tab.id;
            tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
            tabsContent.appendChild(tabContent);

        })

    }


    tabsContainer.addEventListener("click", function (event) {
        if (event.target.matches(".tabLinks")) {
            let tabId = event.target.getAttribute("data-tab");
            if (tabId !== activeTab) {
                openTab(tabId);
                activeTab = tabId;
            }

        }
    })

    function openTab(tabId) {
        const tabContents = document.querySelectorAll(".tabContent");
        const tabLinks = document.querySelectorAll(".tabLinks");

        tabLinks.forEach((tabLink) => tabLink.classList.remove("active"));
        tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

        document.getElementById(tabId).classList.add("active");
        document.querySelector(`button[data-tab=${tabId}]`).classList.add("active");
    }


    renderTabs();
    document.getElementById(activeTab).classList.add("active");
    document.querySelector(`button[data-tab=${activeTab}]`).classList.add("active");
})