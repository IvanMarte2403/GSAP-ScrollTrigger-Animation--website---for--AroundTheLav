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