const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.sections');
const labelEls = document.querySelectorAll('.nav-label');

// Agrega un evento de hover a cada .nav_link
navLinkEls.forEach((navLinkEl, index) => {
  navLinkEl.addEventListener('mouseenter', () => {
    labelEls[index].classList.add('visible'); // Mostrar el texto correspondiente al hacer hover
  });

  navLinkEl.addEventListener('mouseleave', () => {
    labelEls[index].classList.remove('visible'); // Ocultar el texto correspondiente al salir del hover
  });
});
let labelTimeout;
let currentSection = 'home';

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight; // Altura de la ventana del navegador
  const middleScreen = windowHeight / 2; // Posición vertical del centro de la pantalla

  sectionEls.forEach(sectionEl => {
    const sectionTop = sectionEl.getBoundingClientRect().top; // Cambio aquí
    const sectionBottom = sectionTop + sectionEl.offsetHeight;

    // Verifica si la sección está cerca del centro de la pantalla
    if (sectionTop <= middleScreen && sectionBottom >= middleScreen) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach((navLinkEl, index) => {
    if (navLinkEl.href.endsWith(`#${currentSection}`)) {
      navLinkEl.classList.add('active');
      labelEls[index].classList.add('visible'); // Mostrar el texto correspondiente
      clearTimeout(labelTimeout);
      labelTimeout = setTimeout(() => {
        labelEls[index].classList.remove('visible');
      }, 16000); // 2000 milisegundos equivalen a 2 segundos
    } else {
      navLinkEl.classList.remove('active');
      labelEls[index].classList.remove('visible'); // Ocultar el texto correspondiente
    }
  });
});
