document.addEventListener("DOMContentLoaded", function() {


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

// Animación de cambio de color
gsap.to(".frase-partes-automatiza", {
    backgroundColor: "#000000",
    scrollTrigger: {
      trigger: ".frase-partes-automatiza",
      start: "top center",
      end: "bottom center",
      scrub: true
    }
});

});