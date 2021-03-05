const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')

// Burger Annimations
burger.addEventListener('click', () => {
  //Adding classlist to nav-links
  nav.classList.toggle('active');

//adding the fade keyframe to each individual link with a delay
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.3}s`;
    }
  });

// adding toggle classlist for animation of burger menu
  burger.classList.toggle('toggle');
});


// Accordion Options Annimations
const button = document.querySelectorAll('button');
const panel = document.querySelectorAll('.panel');
const arrow = document.querySelectorAll('.arrow');

for(let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    panel[i].classList.toggle('panelActive');
    arrow[i].classList.toggle('arrowActive');
  });
}
