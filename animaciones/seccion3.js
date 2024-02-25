// ======Animacion de Rotacion de Imagenes======

// ScrollTrigger.create({
//     trigger: '.contenedor-imagen',
//     start: 'top center',
//     onEnter: () => {
//       gsap.to('.contenedor-imagen', {
//         rotation: -10,
//         duration: 1,
//         ease: 'power1.inOut'
//       });
//     }
//   });

//   ScrollTrigger.create({
//     trigger: '.frase-autor',
//     start: 'top center',
//     onEnter: () => {
//       gsap.from('.frase-autor', {
//         autoAlpha: 0,
//         duration: 2,
//         ease: 'power2.inOut'
//       });
//     }
//   });
gsap.from('.three', {
    x: '-100%',
    scrollTrigger: {
      trigger: '.three',
      start: 'top bottom',
      end: 'top center',
      scrub: true
    }
  });


