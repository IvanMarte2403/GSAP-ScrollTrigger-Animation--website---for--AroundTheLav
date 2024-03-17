var menu = document.getElementById('menuLateral');
var boton = document.getElementById('botonMenu');
var closebtn = document.querySelector('.closebtn');
var dropdownContainer = document.querySelector('.dropdown-container');

var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');

boton.addEventListener('click', function() {
    if(window.innerWidth > 768) {
        if (menu.style.width === '200px') {
            menu.style.width = '0';
        } else {
            menu.style.width = '600px';
        }
    }else{
        if (menu.style.width === '100%') {
            menu.style.width = '0';
        } else {
            menu.style.width = '100%';
        }
    }
});

closebtn.addEventListener('click', function() {
    menu.style.width = '0';
});

function showDropdown() {
    dropdownContent.classList.add('show');
}



dropdown.addEventListener('mouseover', showDropdown);
dropdown.addEventListener('mouseout', hideDropdown);
dropdownContent.addEventListener('mouseover', showDropdown);
dropdownContent.addEventListener('mouseout', hideDropdown);