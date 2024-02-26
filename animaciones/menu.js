// JavaScript
window.addEventListener('scroll', function() {
    let links = document.querySelectorAll('.menu-link');
    links.forEach(link => {
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= window.pageYOffset &&
        section.offsetTop + section.offsetHeight > window.pageYOffset
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  
  let toggleMenuButton = document.getElementById('toggle-menu');
  let showMenuButton = document.getElementById('show-menu');
  let menu = document.getElementById('menu');
  
  toggleMenuButton.addEventListener('click', function() {
    menu.style.display = 'none';
    showMenuButton.style.display = 'block';
  });
  
  showMenuButton.addEventListener('click', function() {
    menu.style.display = 'block';
    showMenuButton.style.display = 'none';
  });