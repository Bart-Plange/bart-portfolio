const hamburger = document.querySelector('.mobile-btn')
const navlinks = document.querySelector('.mobile')

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('open');
    navlinks.classList.toggle('hidden')

})