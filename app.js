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

// Form Submisson Path 

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    status.classList.add('success');
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form";
    status.classList.add('error');
  });
}
form.addEventListener("submit", handleSubmit)