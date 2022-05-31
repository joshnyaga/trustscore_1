let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    menu.classList.toggle('fa-bars')
    header.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-times')
    menu.classList.toggle('fa-bars')
    header.classList.remove('active')
}


// jquery for the forms
