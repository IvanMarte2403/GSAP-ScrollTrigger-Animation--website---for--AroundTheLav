// =======APARICION DE LA FRASE, H1 LLEGA POR LA IZQUIERDA Y EL SPAN APARECE=======

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
  start: 'top center',
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
  start: 'top center',
  onEnter: () => {
    gsap.to(h1Fundadores, { x: '0', scale: 1, duration: 1 });
  },
  onLeaveBack: () => {
    gsap.to(h1Fundadores, { x: '-100vw', scale: 0.8, duration: 1 });
  }
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