const configBox = [
    { color: "red", width: "33.33%" },
    { color: "green", width: "33.33%" },
    { color: "blue", width: "33.33%" },
    { color: "yellow", width: "50%" },
    { color: "orange", width: "50%" },
    { color: "purple", width: "70%" },
    { color: "pink", width: "30%" }
];

let container = document.createElement("div");
container.className="container";

configBox.forEach((config, index) => {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = config.color;
    box.style.width = config.width;

    container.appendChild(box);
});

container.addEventListener("click", (event) => {
    let target = event.target;
    if(target.classList.contains("box")){
        let index = Array.from(container.children).indexOf(target);
        let currentbox = configBox[index];
        alert(`The current box ${index} is ${currentbox.color}`)
    }
})

document.body.appendChild(container);