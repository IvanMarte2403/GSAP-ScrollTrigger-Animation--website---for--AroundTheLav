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

var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');


dropdown.addEventListener('mouseover', function() {
    if (window.innerWidth > 768) {
      menu.style.width = '90vh';
    }
  });
  
  dropdown.addEventListener('mouseout', function() {
    if (window.innerWidth > 768) {
      menu.style.width = '0';
    }
  });


dropdown.addEventListener('click', function() {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});