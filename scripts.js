const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-nav');
const portfolio = document.querySelector('.folioport');
const about = document.querySelector('.bouta');
const contact = document.querySelector('.tactcon');
const body = document.querySelector('body');
const logo = document.querySelector('.logo-text');
const btnsee1 = document.querySelector('#btnsee1');
const btnsee2 = document.querySelector('#btnsee2');
const btnsee3 = document.querySelector('#btnsee3');
const btnsee4 = document.querySelector('#btnsee4');
const detailsCon = document.querySelector('.details-container');
const close = document.querySelector('.btnexit');
const contactForm = document.forms[0];
const inpMail = document.querySelector('#mail');
const liErr = document.querySelector('#err');

const modalContent = {
  name: 'Awesome Books Website',
  description:
    'A webapp that keeps track of your list of awesome books. You\'re able to add and remove books as you like. We also made use of local storage to keep of your list even when you reload the page!',
  image: './artwork/projects/awesomebooks.png',
  technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
  liveLink: '#',
  srcLink: '#',
  icons: ['./media/live_icon.png', './media/github.png'],
};

detailsCon.innerHTML = `
<div class="details">
            <div class="header_details">
              <button class="btnexit" onclick="closePopup()" id="btnexit1">X</button>
              <h3 class="title_details" id="title_details1">${modalContent.name}</h3>
            </div>
            <img src="${modalContent.image}" alt="" class="img_details" id="img_details1">
            <p class="desc">${modalContent.description}</p>
            <ul class="tech">
              <li>|  ${modalContent.technologies[0]}  |</li>
              <li>${modalContent.technologies[3]}  |</li>
              <li>${modalContent.technologies[1]}  |</li>
            </ul>
            <button type="button" class="live">
              <a href="${modalContent.liveLink}">See Live<img src="${modalContent.icons[0]}" alt="Live link icon"></a>
            </button><br>
            <button type="button" class="src">
              <a href="${modalContent.srcLink}">See Source<img src="${modalContent.icons[1]}" alt="GitHub link icon"></a>
            </button>
</div>
`;

function myFunction(x) {
  x.classList.toggle('change');
}

function closePopup() {
  detailsCon.style.display = 'none';
  body.classList.toggle('bang');
}
function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}

contactForm.addEventListener('submit', (event) => {
  const mail = inpMail.value;

  if (isLowerCase(mail) === true) {
    contactForm.submit();
  } else {
    event.preventDefault();
    event.stopPropagation();
    liErr.innerHTML = 'Please ensure your email is all lowercase.';
  }
});

btnsee1.addEventListener('click', () => {
  detailsCon.style.display = 'flex';
  body.classList.toggle('bang');
});

btnsee2.addEventListener('click', () => {
  detailsCon.style.display = 'flex';
  body.classList.toggle('bang');
});

btnsee3.addEventListener('click', () => {
  detailsCon.style.display = 'flex';
  body.classList.toggle('bang');
});

btnsee4.addEventListener('click', () => {
  detailsCon.style.display = 'flex';
  body.classList.toggle('bang');
});

hamburger.addEventListener('click', () => {
  body.classList.toggle('bang');
  navMenu.classList.toggle('boom');
  logo.classList.toggle('invisible');
  myFunction(hamburger);
});

portfolio.addEventListener('click', () => {
  navMenu.classList.toggle('boom');
  body.classList.toggle('bang');
  logo.classList.toggle('invisible');
  hamburger.classList.toggle('change');
});

about.addEventListener('click', () => {
  navMenu.classList.toggle('boom');
  body.classList.toggle('bang');
  logo.classList.toggle('invisible');
  hamburger.classList.toggle('change');
});

contact.addEventListener('click', () => {
  navMenu.classList.toggle('boom');
  body.classList.toggle('bang');
  logo.classList.toggle('invisible');
  hamburger.classList.toggle('change');
});

close.addEventListener('click', () => {
  closePopup();
});