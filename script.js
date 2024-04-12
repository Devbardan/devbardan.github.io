const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.sections');
const labelEls = document.querySelectorAll('.nav-label');
const toggleButton = document.getElementById("toggle-button");
const toogles = document.querySelectorAll('.toogle');
const body = document.querySelector('body');

function loadDarksMode(){
  const darksModeOn = localStorage.getItem('darksOn') === 'true';
    if (darksModeOn) {
      body.classList.add('darks');
    }
}
function loadLigthMode(){
  const ligthModeOn = localStorage.getItem('darksOn') === 'false';
  if (!ligthModeOn){
    body.classList.remove('darks');
  }
}

toggleButton.onclick = function() {
  toogles.forEach(toggle => {
    toggle.classList.toggle('hidden');
    let darksOn = toggle.classList.contains('hidden');
    localStorage.setItem('darksOn', darksOn);
  });
  document.body.classList.toggle('darks');
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
loadDarksMode();
