var menu = document.getElementById('menuLateral');
var boton = document.getElementById('botonMenu');
var closebtn = document.querySelector('.closebtn');

boton.addEventListener('click', function() {
    if (menu.style.width === '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
});

closebtn.addEventListener('click', function() {
    menu.style.width = '0';
});