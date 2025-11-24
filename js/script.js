// js/script.js - funciones simples para la página
console.log("Glowder AI — sitio cargado");

// ejemplo: abrir mailto al hacer click en CTA (ya enlazado en HTML, esto es extra)
document.addEventListener("DOMContentLoaded", function(){
  const cta = document.querySelector(".cta");
  if(cta){
    cta.addEventListener("click", () => {
      console.log("Usuario hizo click en contactar");
    });
  }
});
