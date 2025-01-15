
  
  // Agregar eventos para pausar el slider al pasar el mouse sobre él
  document.querySelector('.slider-container').addEventListener('mouseenter', stopSlider);
  document.querySelector('.slider-container').addEventListener('mouseleave', startSlider);
  
  // Obtener el botón
  let mybutton = document.getElementById("btnTop");
  
  // Mostrar el botón cuando el usuario haga scroll hacia abajo 20px desde la parte superior del documento
  window.onscroll = function() {
      scrollFunction();
  };
  
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }
  
  // Cuando el usuario haga clic en el botón, volverá a la parte superior del documento
  function scrollToTop() {
      document.body.scrollTop = 0; // Para Safari
      document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
  }


  // Mostrar el botón cuando el usuario baja la página
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// Función para desplazamiento suave
document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
