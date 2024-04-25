const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.sections');
const labelEls = document.querySelectorAll('.nav-label');
const toggleButton = document.getElementById('toggle-button');
const toogles = document.querySelectorAll('.toogle');
const body = document.querySelector('body');
const cards = document.querySelectorAll('.card')
const activeCardClass = 'card-active';


function loadTheme() {
    const darkModeOn = localStorage.getItem('data-theme') === 'dark';
    if (darkModeOn) {
        body.setAttribute('data-theme', 'dark');
        toogles[0].classList.add('hidden');
        toogles[1].classList.remove('hidden');
        
    } else {
        body.setAttribute('data-theme', 'light');
        toogles[0].classList.remove('hidden');
        toogles[1].classList.add('hidden');
    }
}

toggleButton.onclick = function() {
  toogles.forEach(toggle => {
      toggle.classList.toggle('hidden');
  });
  const darkModeOn = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', darkModeOn ? 'light' : 'dark');
  localStorage.setItem('data-theme', darkModeOn ? 'light' : 'dark');
};

navLinkEls.forEach((navLinkEl, index) => {
  navLinkEl.addEventListener('mouseenter', () => {
    labelEls[index].classList.add('visible'); 
  });

  navLinkEl.addEventListener('mouseleave', () => {
    labelEls[index].classList.remove('visible');
  });
});
let labelTimeout;
let currentSection = 'home';

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight; 
  const middleScreen = windowHeight / 2; 

  sectionEls.forEach(sectionEl => {
    const sectionTop = sectionEl.getBoundingClientRect().top; 
    const sectionBottom = sectionTop + sectionEl.offsetHeight;

   
    if (sectionTop <= middleScreen && sectionBottom >= middleScreen) {
      currentSection = sectionEl.id;
    }
  });

  let activeCard = null;

  cards.forEach(card => {
      card.addEventListener('click', () => {
          if (card === activeCard) {
              return;
          }
          cards.forEach(c => c.classList.remove(activeCardClass, 'little-card'));
          card.classList.add(activeCardClass);
          card.parentNode.prepend(card);
          cards.forEach(c => {
              if (c !== card) {
                  c.classList.add('little-card');
              }
          });
          activeCard = card;
      });
  });
  
  navLinkEls.forEach((navLinkEl, index) => {
    if (navLinkEl.href.endsWith(`#${currentSection}`)) {
      navLinkEl.classList.add('active');
      labelEls[index].classList.add('visible'); 
      clearTimeout(labelTimeout);
      labelTimeout = setTimeout(() => {
        labelEls[index].classList.remove('visible');
      }, 2000); 
    } else {
      navLinkEl.classList.remove('active');
      labelEls[index].classList.remove('visible'); 
    }
  });
});
loadTheme();