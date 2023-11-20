const progressBar = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;

nextBtn.onclick = (e) => {
    currentActive++
    if (currentActive === circles.length) {
        currentActive = circles.length
    }
    update();
}

previousBtn.onclick = (e) => {
    currentActive--

    if (currentActive < 1){
        currentActive = 1
    }
    update();
}

function update(){
    circles.forEach((circle, idx) => {
        if (idx < currentActive){
            circle.classList.add('active');
        }else {
            circle.classList.remove('active');
        }
    });

    const activeCircles = document.querySelectorAll('.active');

    progressBar.style.width = `${(activeCircles.length - 1) /(circles.length - 1)  * 100}%`

    if (currentActive === 1){
        previousBtn.disabled = true;
    }else if (currentActive === circles.length){
        nextBtn.disabled = true;
    }else {
        previousBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

