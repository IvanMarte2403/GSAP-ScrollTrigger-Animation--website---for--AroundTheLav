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