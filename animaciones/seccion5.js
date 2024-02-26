
// Animación inicial
gsap.from(".frase-aumenta-tus-ventas .aumenta-palabra:nth-child(odd) h1", {
    x: "-100%",
    scrollTrigger: {
      trigger: ".frase-aumenta-tus-ventas",
      start: "top bottom",
      end: "95% bottom", // Ajustado a "75% bottom"
      scrub: true
    }
  });
  
  gsap.from(".frase-aumenta-tus-ventas .aumenta-palabra:nth-child(even) h1", {
    x: "100%",
    scrollTrigger: {
      trigger: ".frase-aumenta-tus-ventas",
      start: "top bottom",
      end: "95% bottom", // Ajustado a "75% bottom"
      scrub: true
    }
  });
  
  // Animación final
  gsap.from(".frase-aumenta-tus-ventas .aumenta-palabra h1", {
    x: "-100%",
    scrollTrigger: {
      trigger: ".frase-aumenta-tus-ventas",
      start: "bottom top",
      end: "+=100%",
      scrub: true
    }
  });

//Animación de Cambio de Color
  gsap.to(".five", {
    backgroundColor: "#ffffff",
    scrollTrigger: {
      trigger: ".five",
      start: "top 75%", // Ajusta esto según tus necesidades
      end: "bottom center", // Ajusta esto según tus necesidades
      scrub: true
    }
  });