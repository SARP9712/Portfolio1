document.addEventListener("DOMContentLoaded", function () {

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1️⃣ Aparece la barra de navegación desde arriba
    tl.from("#main-nav", { opacity: 0, y: -30, duration: 1 })
    
    // 2️⃣ Los enlaces del nav aparecen con un efecto escalonado
      .from("#main-nav a", { opacity: 0, y: 10, stagger: 0.2, duration: 0.8 }, "-=0.5")

    // 3️⃣ El selector de idioma aparece después del nav
      .from(".lg", { opacity: 0, y: -30, duration: 1 }, "-=0.6")

    // 4️⃣ Animación del título, una palabra a la vez
      .from(".title span", { opacity: 0, y: 30, stagger: 0.2, duration: 1 }, "-=0.5")

    // 5️⃣ Animación de la imagen en espiral con rotación
      .from(".spiral-svg", { opacity: 0, scale: 0.5, rotation: -180, duration: 1.2, ease: "back.out(1.7)" }, "-=0.8")

    // 6️⃣ La flecha entra con un pequeño rebote
      .from(".arrow-svg", { opacity: 0, y: -20, duration: 1, ease: "bounce.out" }, "-=0.7")

    // 7️⃣ Finalmente, aparece el footer desde abajo
      .from(".bottom", { opacity: 0, y: 50, duration: 1 }, "-=0.5");

    
   
});
