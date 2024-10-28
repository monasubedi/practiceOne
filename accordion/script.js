const items = [
    {
        title:"Section 1",
        content:"Content for section 1"
    },
    {
        title:"Section 2",
        content:"Content for section 2"
    },
    {
        title:"Section 3",
        content:"Content for section 3"
    }
];

document.addEventListener("DOMContentLoaded", function(){
    let accordionContainer = document.querySelector("#accordion");
    items.forEach((item,index) => {
       
        let accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        let accordionHeader = document.createElement("div");
        accordionHeader.classList.add("accordion-header");
        accordionHeader.innerText = item.title;

        let accordionContent = document.createElement("div");
        accordionContent.classList.add("accordion-content");
        accordionContent.innerHTML = `<p>${item.content}</p>`;

      

        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionContent);
        accordionContainer.appendChild(accordionItem);
        if(index === 0){
            accordionItem.classList.add("active");
            accordionContent.style.display="block";
        }
        else{
            accordionItem.classList.remove("active");
            accordionContent.style.display="none"; 
        }

    })

    accordionContainer.addEventListener("click",function(event){
        let accordionHeader = event.target.closest(".accordion-header");
        let accordionItem = accordionHeader.parentNode;
        let accordionContent = accordionItem.querySelector(".accordion-content");

        let isActive = accordionItem.classList.contains("active");

        document.querySelectorAll(".accordion-item").forEach((item) => {
            item.classList.remove("active");
            item.querySelector(".accordion-content").style.display = "none";

        })
        if(!isActive){
            accordionItem.classList.add("active");
            accordionContent.style.display = "block";
        }
    })
})