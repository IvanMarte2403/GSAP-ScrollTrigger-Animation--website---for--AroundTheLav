

// Animación de las palabras
gsap.from(".frase-partes-automatiza", {
    x: "100%",
    scrollTrigger: {
      trigger: ".frase-partes-automatiza",
      start: "top bottom",
      end: "95% bottom",
      scrub: true
    }
});


gsap.to(".automatiza-seccion", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".automatiza-seccion",
      start: "top 75%", // Ajusta esto según tus necesidades
      end: "bottom center", // Ajusta esto según tus necesidades
      scrub: true
    }
});