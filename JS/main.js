const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.ul-nav');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})


let counts=setInterval(updated) ;
let upto=0;

function updated(){
    var count= document.getElementById("counter1");
    count.innerHTML=++upto;

    if(upto === 2536) {
        clearInterval(counts);
    }
}






