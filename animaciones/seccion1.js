// ======Seccion 1======

gsap.from('.one',{
  autoAlpha: 1,
  y: 50,
  scrollTrigger:{
      trigger: '.one',
      start: 'top center',
      end: 'bottom center',
      scrub: true
  }
});

gsap.from('.two',{
  autoAlpha: 0,
  y: 50, 
  scrollTrigger:{
      trigger: '.two',
      start: 'top 80%',
      end: 'bottom center',
      scrub: true
  }
});



//Movimiento del foco 

let fotoTimeline = gsap.timeline();

fotoTimeline.from('.focoInicioimg',{
    
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'power1.inOut'
})
.from('.focoInicio',{
    autoAlpha: 1,
    y: 50,
    scrollTrigger:{
        trigger: '.one',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});



// ======Movimiento de las imagenes======

// Selecciona los elementos que queremos animar
let imagenes = document.querySelectorAll('.seccion2-sub-recuadros img');
let textos = document.querySelectorAll('.seccion2-sub-recuadros p');

// Mueve las imágenes y el texto fuera de la vista inicialmente
gsap.set(imagenes, { x: '-100vw' });
gsap.set(textos, { x: '100vw' });

// Crea un ScrollTrigger para cada imagen
imagenes.forEach((imagen, i) => {
  ScrollTrigger.create({
    trigger: imagen,
    start: 'top bottom',
    onEnter: () => {
      // Mueve la imagen a su posición original cuando el usuario hace scroll
      gsap.to(imagen, { x: '0', duration: 1 });
    }
  });
});

// Crea un ScrollTrigger para cada texto
textos.forEach((texto, i) => {
  ScrollTrigger.create({
    trigger: texto,
    start: 'top bottom',
    onEnter: () => {
      // Mueve el texto a su posición original cuando el usuario hace scroll
      gsap.to(texto, { x: '0', duration: 1 });
    }
  });
});

// =======Animacion Iframe=======
// Selecciona el iframe
let iframe = document.querySelector('.iframeVideo iframe');

// Mueve el iframe fuera de la vista inicialmente y establece el origen de la transformación
gsap.set(iframe, { autoAlpha: 0, rotationY: -90, transformOrigin: "center" });

// Crea un ScrollTrigger para el iframe
ScrollTrigger.create({
  trigger: '.iframeVideo',
  start: 'top center',
  onEnter: () => {
    // Mueve el iframe a su posición original y rota horizontalmente cuando el usuario hace scroll
    gsap.to(iframe, { autoAlpha: 1, rotationY: 0, duration: 1 });
  }
});
