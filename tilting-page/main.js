const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const continaer = document.querySelector(".container");


openBtn.onclick = (e) => continaer.classList.add('show-nav')
closeBtn.onclick = (e) => continaer.classList.remove('show-nav')

