// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//     alert("div")
// }, {
//     capture: true
// })
// form.addEventListener("click", function (event) {
//     alert("form")
// })
// button.addEventListener("click", function (event) {
//     alert("button")
// })

// function func(event) {
//     alert(`currentTarget = ${event.currentTarget.tagName} , target = ${event.target.tagName}, this = ${this.tagName}`)
// }


const modalContainer = document.querySelector(".modalContainer");
const modal = document.querySelector(".modal");

document.querySelector(".button").addEventListener("click", () => {
    toggleModal(true);
})
modalContainer.addEventListener("click", (e) => {
    if (e.target.className === "modalContainer") {
        toggleModal(false);
    }


})

function toggleModal(toggle) {

    modalContainer.style.display = toggle ? "flex" : "none";

}