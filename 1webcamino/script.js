// Selección de elementos
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links ul li a');

// Evento para el menú hamburguesa
menuHamburguesa.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    menuHamburguesa.classList.toggle('open', isActive);
});

// Evento para los elementos del menú
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Cierra el menú
        menuHamburguesa.classList.remove('open'); // Restablece el icono de hamburguesa
    });
});

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

document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const navLinks = document.querySelector('.nav-links');
    const subMenuLinks = document.querySelectorAll('.has-submenu > a');

    // Toggle de menú hamburguesa para dispositivos móviles
    menuHamburguesa.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Toggle de submenús en clic
    subMenuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace redirija

            const parentLi = link.parentElement;

            // Cierra otros submenús abiertos
            document.querySelectorAll('.has-submenu').forEach(item => {
                if (item !== parentLi) {
                    item.classList.remove('open');
                }
            });

            // Alterna el estado del submenú clicado
            parentLi.classList.toggle('open');
        });
    });
});

