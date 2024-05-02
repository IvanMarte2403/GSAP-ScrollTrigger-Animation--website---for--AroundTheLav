document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de la forma predeterminada

  let formData = new FormData(this);

  fetch('enviar.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(response => {
    alert(response); // Muestra una alerta con la respuesta del servidor
  })
  .catch(error => console.error('Error:', error));
});

let h1 = document.querySelector('.frase-bienvenida h1');
let span = document.querySelector('.frase-bienvenida span');

gsap.set(h1, { x: '-100vw' });
gsap.set(span, { autoAlpha: 0 });

ScrollTrigger.create({
  trigger: h1,
  start: 'top center',
  onEnter: () => {
    gsap.to(h1, { x: '0', duration: 1 });
  },
  onLeaveBack: () => {
    gsap.to(h1, { x: '-100vw', duration: 1 });
  }
});

ScrollTrigger.create({
  trigger: span,
  start: 'top 25%',
  onEnter: () => {
    gsap.to(span, { autoAlpha: 1, duration: 0.4});
  },
  onLeaveBack: () => {
    gsap.to(span, { autoAlpha: 0, duration: 1 });
  }
  
});




// ======Seccio2 ======

let h1Fundadores = document.querySelector('.two-contenedor-titulo h1');
gsap.set(h1Fundadores, { x: '-100vw', scale: 0.8 });

ScrollTrigger.create({
  trigger: h1Fundadores,
  start: 'top 75%',
  onEnter: () => {
    gsap.to(h1Fundadores, { x: '0', scale: 1, duration: 1 });
  },
  onLeaveBack: () => {
    gsap.to(h1Fundadores, { x: '-100vw', scale: 0.8, duration: 1 });
  }
});


gsap.to(".two", {
  backgroundColor: 'black',
  scrollTrigger: {
    trigger: ".two",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".imagen-bienvenida img", {
  duration: 2, 
  x: -20, 
  y: -20, 
  yoyo: true, 
  repeat: -1, 
  ease: "power1.inOut"
});

// =====Seccion de Logos=======

let logos = document.querySelectorAll('.two-marcas-iconos img');

gsap.set(logos, { autoAlpha: 0 });

logos.forEach((logo, i) => {
  ScrollTrigger.create({
    trigger: logo,
    start: 'top center',
    onEnter: () => {
      gsap.to(logo, { autoAlpha: 1, duration: 1, repeat: 2, yoyo: true });
    }
  });
});



// ======Frase Te entendemos como nadie ======

gsap.set('.row-three h1', { scale: 0.8 });
gsap.set('.row-three span', { y: '-100vh' });

ScrollTrigger.create({
  trigger: '.row-three h1',
  start: 'top center',
  onEnter: () => {
    gsap.to('.row-three h1', { scale: 1, duration: 1 });
  }
});

ScrollTrigger.create({
  trigger: '.row-three span',
  start: 'top center',
  onEnter: () => {
    gsap.to('.row-three span', { y: '0', duration: 1 });
  }
});

let h1s = document.querySelectorAll('.three-div-h1 h1');

h1s.forEach((h1, i) => {
  ScrollTrigger.create({
    trigger: h1,
    start: 'top 90%',
    onEnter: () => {
      let text = h1.textContent;
      h1.textContent = '';
      h1.style.visibility = 'visible';
      let i = 0;
      let typing = setInterval(() => {
        if (i < text.length) {
          h1.textContent += text[i];
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100); // Ajusta la velocidad de la animación aquí
    }
  });
});


gsap.set('.four-titulo h1', { autoAlpha: 0 });

ScrollTrigger.create({
  trigger: '.four-titulo h1',
  start: 'top center',
  onEnter: () => {
    gsap.to('.four-titulo h1', { autoAlpha: 1, duration: 1 });
  }
});

gsap.set('.four-contenedor-imagenes img', { autoAlpha: 0 });

let imgs = document.querySelectorAll('.four-contenedor-imagenes img');

imgs.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    start: 'top center',
    onEnter: () => {
      gsap.to(img, { autoAlpha: 1, duration: 1 });
    }
  });
});


gsap.set('.texto-carousel p', { autoAlpha: 0, scale: 0.8 });

ScrollTrigger.create({
  trigger: '.texto-carousel p',
  start: 'top center',
  onEnter: () => {
    gsap.to('.texto-carousel p', { autoAlpha: 1, scale: 1, duration: 1 });
  }
});

gsap.set('.four-frase1 h1', { x: '100vw' });

ScrollTrigger.create({
  trigger: '.four-frase1 h1',
  start: 'top center',
  onEnter: () => {
    gsap.to('.four-frase1 h1', { x: '0', duration: 1 });
  },
  onLeaveBack: () => {
    gsap.to('.four-frase1 h1', { x: '100vw', duration: 1 });
  }
});

gsap.set('.four-leyendo h1', { x: '-100vw' });

ScrollTrigger.create({
  trigger: '.four-leyendo h1',
  start: 'top 75%',
  onEnter: () => {
    gsap.to('.four-leyendo h1', { x: '0', duration: 1 });
  },
  onLeaveBack: () => {
    gsap.to('.four-leyendo h1', { x: '-100vw', duration: 1 });
  }
});

ScrollTrigger.create({
  trigger: '.four-leyendo2 h1',
  start: 'top 75%',
  onEnter: () => {
    gsap.to('.four-leyendo2 h1', { y: '0', duration: 1, delay: 0.5 });
  },
  onLeaveBack: () => {
    gsap.to('.four-leyendo2 h1', { y: '100vh', duration: 1 });
  }
});

ScrollTrigger.create({
  trigger: '.four-leyendo2 h1',
  start: 'top 80%',
  onEnter: () => {
    let h1 = document.querySelector('.four-leyendo2 h1');
    let text = h1.textContent;
    h1.textContent = '';
    let i = 0;
    let typing = setInterval(() => {
      if (i < text.length) {
        h1.textContent += text[i];
        i++;
      } else {
        clearInterval(typing);
      }
    }, 60); // Ajusta la velocidad de la animación aquí
  }
});


gsap.set('.four-frase3 h1', { autoAlpha: 0 });

ScrollTrigger.create({
  trigger: '.four-frase3 h1',
  start: 'top center',
  onEnter: () => {
    gsap.to('.four-frase3 h1', { autoAlpha: 1, duration: 1 });
  }
});

gsap.from("#frase-sencilla", {
  autoAlpha: 0,
  scrollTrigger: {
    trigger: "#frase-sencilla",
    start: "top center",
    toggleActions: "play none none none"
  }
});

gsap.from("#texto-frase-sencilla", {
  autoAlpha: 0,
  scrollTrigger: {
    trigger: "#texto-frase-sencilla",
    start: "top center",
    toggleActions: "play none none none"
  }
});

gsap.from(".five-frase1", {
  scrollTrigger: {
    trigger: ".five-frase1",
    start: "top center", // Ajusta esto según tus necesidades
  },
  y: 100, // Ajusta esto según tus necesidades
  opacity: 0,
  duration: 1, // Ajusta esto según tus necesidades
});

gsap.from(".five-frase-marketeros", {
  scrollTrigger: {
    trigger: ".five-frase-marketeros",
    start: "top center", // Ajusta esto según tus necesidades
  },
  x: -100, // Ajusta esto según tus necesidades
  opacity: 0,
  duration: 1, // Ajusta esto según tus necesidades
});


gsap.set('.texto-frase2-nube p', { autoAlpha: 0 });

ScrollTrigger.create({
  trigger: '.texto-frase2-nube p',
  start: 'top center',
  onEnter: () => {
    gsap.to('.texto-frase2-nube p', { autoAlpha: 1, duration: 1 });
  }
});

// Animación para el span
gsap.from("#span-around", {
  scrollTrigger: {
    trigger: ".five-frase3",
    start: "top center", // Ajusta esto según tus necesidades
  },
  opacity: 0,
  duration: 1, // Ajusta esto según tus necesidades
});

// Animación para el resto del párrafo
gsap.from(".five-frase3 p", {
  scrollTrigger: {
    trigger: ".five-frase3",
    start: "top center", // Ajusta esto según tus necesidades
    delay: 1, // Ajusta esto según tus necesidades
  },
  opacity: 0,
  duration: 1, // Ajusta esto según tus necesidades
});


//Animacion para Creatividad + Trabajo Duro
gsap.from(".six-frase-principal", {
  scrollTrigger: {
    trigger: ".six-frase-principal",
    start: "top center", // Ajusta esto según tus necesidades
  },
  x: -100, // Ajusta esto según tus necesidades
  opacity: 0,
  duration: 1, // Ajusta esto según tus necesidades
});

gsap.from(".six-imagen img", {
  scrollTrigger: {
    trigger: ".six-imagen img",
    start: "top center", // Ajusta esto según tus necesidades
  },
  scale: 0.8, // Ajusta esto según tus necesidades
  opacity: 0,
  duration: 1, // Ajusta esto según tus necesidades
});
// Animación de parpadeo para el texto
gsap.to(".six-frase-necesitamos", {
  scrollTrigger: {
    trigger: ".six-frase-necesitamos",
    start: "top center", // Ajusta esto según tus necesidades
  },
  opacity: 0,
  duration: 0.5, // Ajusta esto según tus necesidades
  repeat: 1, // Repite la animación solo una vez (parpadea dos veces)
  yoyo: true, // Vuelve a la opacidad original después de cada repetición
});

gsap.from(".six-traje-texto p", {
  scrollTrigger: {
    trigger: ".six-traje-texto p",
    start: "top center", // Ajusta esto según tus necesidades
  },
  opacity: 0,
  duration: 1, // Ajusta esto según tus necesidades
});

gsap.from(".six-traje-frase2 p", {
  scrollTrigger: {
    trigger: ".six-traje-frase2 p",
    start: "top center", // Ajusta esto según tus necesidades
  },
  opacity: 0,
  duration: 1, // Ajusta esto según tus necesidades
});



// =======Botones de Contato=======

document.querySelector('.one-boton').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#formulario').scrollIntoView({ behavior: 'smooth' });
});


// ========Galería de Imagenes0============+

// Primero, seleccionamos todas las imágenes en la galería
var imagenes = document.querySelectorAll('.imagen-galeria img');

// Luego, creamos una línea de tiempo GSAP
var tl = gsap.timeline({repeat: -1, repeatDelay: 1});

// Añadimos una animación para todas las imágenes
tl.to(imagenes, {opacity: 0, duration: 1})
  .to(imagenes, {opacity: 1, duration: 1}); 



// Transicion de La Página
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});