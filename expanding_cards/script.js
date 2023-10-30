const panels = document.querySelectorAll(".panels");


panels.forEach((panel) => {


    panel.addEventListener("click", () =>{
        reomveActiveClass();
        panel.classList.add("active");
    })
})

function reomveActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}