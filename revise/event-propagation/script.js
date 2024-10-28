// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const button = document.querySelector(".btn");

// div.addEventListener("click", () => {
//     alert("div");
// })
// form.addEventListener("click", () => {
//     alert("form")
// })
// button.addEventListener("click", () => {
//     alert("button");
// })


// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

// function func(e) {
//     console.log(e.currentTarget.tagName,e.target.tagName, this.tagName);
//     // alert(e.currentTarget.tagName, e.target.tagName, this.tagName);
// }

// const products = document.querySelector(".products");
// products.addEventListener("click", (event) => {
//     if (event.target.tagName === "SPAN") {
//         window.location = "/" + event.target.className;
//     }
// })


//What's the output?
//make the form event executes first, then button and then div.

// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const button = document.querySelector(".btn");

// div.addEventListener("click", () => {
//     alert("div");
// })
// form.addEventListener("click", () => {
//     alert("form");
// })
// button.addEventListener("click", () => {
//     alert("button");
// })

//answer
// div.addEventListener("click", () => {
//     alert("div");
// })
// form.addEventListener("click", () => {
//     alert("form");
// },{
//     capture:true
// })
// button.addEventListener("click", () => {
//     alert("button");
// })



//ques: Create a Modal which closes by clicking on negative space.
//answer

const btn = document.querySelector(".btn");
const modalContainer = document.querySelector(".modalContainer");

const toggleModal = () => {
    
}
btn.addEventListener("click", () => {
    modalContainer.style.display = "flex";

});
modalContainer.addEventListener("click", (event) => {
    if (event.target.className === "modalContainer") {
        modalContainer.style.display = "none";
    }

})





