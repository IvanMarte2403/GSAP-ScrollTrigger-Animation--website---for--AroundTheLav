
// =======Animaciones ¿Porque estamos tan seguros======
// Selecciona el div
let div = document.querySelector('.segundo-div');

// Crea la animación
let anim = gsap.to(div, {
  x: '-10%',
  duration: 3,
  ease: 'linear',
  repeat: -1,
  yoyo: true, // Añade esta línea
  paused: true
});

// Crea un ScrollTrigger para el div
ScrollTrigger.create({
  trigger: '.segundo-div',
  start: 'top center',
  onEnter: () => {
    // Inicia la animación cuando el usuario hace scroll hasta el div
    anim.play();
  },
  onLeaveBack: () => {
    // Pausa la animación cuando el usuario hace scroll hacia atrás más allá del div
    anim.pause();
  }
});

// // Selecciona el elemento
// let phase = document.querySelector('.four-phase');

// // Crea un ScrollTrigger para el elemento
// ScrollTrigger.create({
//   trigger: '.four-phase',
//   start: 'top bottom',
//   end: 'bottom top',
//   scrub: true,
//   markers: true,
//   onUpdate: (self) => {
//     // Mueve el elemento hacia arriba a medida que el usuario hace scroll hacia abajo
//     gsap.to(phase, { y: -self.progress * 100 });
//   }
// });


// // ======Seccion 4======


gsap.from('.four', {
  autoAlpha: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.four',
    start: 'top center'
  }
});
