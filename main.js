gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function(){
    const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;

    const imgHolderHeight= window.innerHeight;
    const additionalScrollHeight = window.innerHeight;

    const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight; 

    document.body.style.height = `${totalBodyHeight}px`;
});

const endValue = document.querySelector('.website-content').offsetHeight * 0.75;


ScrollTrigger.create({
    trigger: ".website-content",
    start: "-0.1% top",
    end: "bottom bottom",
    onEnter: () =>{
        gsap.set(".website-content",{position: 'absolute', top: '195%'});
    },
    onLeaveBack: () =>{
        gsap.set(".website-content",{position: 'fixed', top: '0'});
    }
});
gsap.to(".header .letters:first-child",{
    x: () => -innerWidth * 3, 
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
    }
});

gsap.to(".header .letters:last-child",{
    x: () => innerWidth * 3, 
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
    }
});

gsap.to(".img-holder",{
    rotation: 0,
    clipPath: 'polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)',
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
    }
});
gsap.to(".img-holder img",{
    scale: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1
    }
});

gsap.from('.fraseBienvenida',{
    autoAlpha: 0,
    y: 200, 
    scale: 0,
    duration: 1,
    easeInOut: 'elastic.out(1, 0.3)',
    scrollTrigger:{
        trigger: '.one',
        start: 'top center',
        markers: true,
    },
});

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


// ====Aparacion de Logos =====

// gsap.from('.patata-logo',{
//     autoAlpha: 0,
//     duration: 1, 
//     scrollTrigger: {
//         trigger: '.patata-logo',
//         start: 'top center'
//     }
// });


// gsap.from('.chopchop-logo',{
//     autoAlpha: 0,
//     duration: 1.4, 
//     scrollTrigger: {
//         trigger: '.chopchop-logo',
//         start: 'top center'
//     }
// });

let fotoTimeline = gsap.timeline();

fotoTimeline.from('.focoInicio',{
    
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

// =======Animación de Escritura=======
let texto = document.querySelector('#parrafoEscritura').innerText;
let contenedor = document.querySelector('#parrafoEscritura');
let duracion = 0.01;
let animacionEjecutada = false; // Variable para rastrear si la animación ya se ha ejecutado

contenedor.innerText = '';

ScrollTrigger.create({
  trigger: '#parrafoEscritura',
  start: 'top 75%',
  y: 100,
  onEnter: () => {
    if (!animacionEjecutada) { // Solo ejecutar la animación si no se ha ejecutado antes
      for(let i=0; i < texto.length; i++){
        let letra = document.createElement('span');
        letra.innerText = texto[i];
        contenedor.appendChild(letra);

        gsap.from(letra, {
          autoAlpha: 0,
          delay: duracion * i,
          duration: duracion, 
        });
      }
      animacionEjecutada = true; // Marcar la animación como ejecutada
    }
  }
});


// ======Section2 =======

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


// // ======Seccion 3======



// gsap.from('.three', {
//     autoAlpha: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: '.three',
//       start: 'top center'
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
 