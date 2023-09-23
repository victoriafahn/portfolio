const header= document.querySelector("header")

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector ('.navlist');

menu.onclick = () => {
    menu.classList.toggle('active'); 
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('active'); 
    navlist.classList.remove('active');
};
