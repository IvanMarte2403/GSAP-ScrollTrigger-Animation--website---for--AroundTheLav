gsap.from(".contenedor-title-six h1", {
    duration: 1,
    x: "-100%",
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contenedor-title-six h1",
      start: "top center", // La animación comienza cuando el elemento llega al centro de la pantalla
      toggleActions: "play none none none" // La animación se reproduce una vez y no se invierte ni se repite
    }
  });
  
  gsap.from(".parrafo-six", {
    duration: 1,
    x: "100%",
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".parrafo-six",
      start: "top center", // La animación comienza cuando el elemento llega al centro de la pantalla
      toggleActions: "play none none none" // La animación se reproduce una vez y no se invierte ni se repite
    }
  });

  gsap.from(".contenedor-imagen-six img", {
    duration: 1, // Duración de la animación en segundos
    scale: 0.8, // Escala inicial de la imagen (80% de su tamaño original)
    ease: "power2.out", // Tipo de easing para la animación
    scrollTrigger: {
      trigger: ".contenedor-imagen-six img",
      start: "top center", // La animación comienza cuando la imagen llega al centro de la pantalla
      toggleActions: "play none none reverse" // La animación se reproduce cuando se desplaza hacia abajo y se invierte cuando se desplaza hacia arriba
    }
  });
  

  gsap.utils.toArray(".span-six,.span-six2,.span-six3 ").forEach((span, i) => {
    gsap.from(span, {
      duration: 1, // Duración de la animación en segundos
      y: "-100px", // Posición inicial en el eje Y (100px por encima de su posición original)
      ease: "power2.out", // Tipo de easing para la animación
      scrollTrigger: {
        trigger: span,
        start: "top bottom", // La animación comienza cuando el span llega al final de la pantalla
        toggleActions: "play none none reverse" // La animación se reproduce cuando se desplaza hacia abajo y se invierte cuando se desplaza hacia arriba
      },
      delay: i * 0.2, // Añade un retraso entre cada span para que caigan uno después del otro
    });
  });

  gsap.from(".titulo-seven", {
  duration: 1, // Duración de la animación en segundos
  autoAlpha: 0, // Opacidad inicial (0 = transparente, 1 = opaco)
  scale: 0.5, // Tamaño inicial (0.5 = la mitad de su tamaño original)
  ease: "power2.out", // Tipo de easing para la animación
  scrollTrigger: {
    trigger: ".titulo-seven", // El elemento que dispara la animación
    start: "top center", // La animación comienza cuando el elemento llega al centro de la pantalla
    toggleActions: "play none none reverse" // La animación se reproduce cuando se desplaza hacia abajo y se invierte cuando se desplaza hacia arriba
  }
});