const open = document.getElementById('open');
const close = document.getElementById('close');
const navBar = document.getElementById('nav-bar');

open.addEventListener('click', ()=> {
    navBar.style.width = "50%";
});

close.addEventListener('click', ()=> {
    navBar.style.width = "0";
});