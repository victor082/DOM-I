const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const nav = document.querySelectorAll('nav a');
nav.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`]
});

const mainHeader = document.querySelector('h1');
mainHeader.innerHTML = siteContent.cta.h1;

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

const features = document.querySelectorAll('h4')[0];
features.textContent = siteContent['main-content']['features-h4'];
features.style.color = 'blue';

const about = document.querySelectorAll('h4')[1];
about.textContent = siteContent['main-content']['about-h4'];
about.style.color = 'blue';

const services = document.querySelectorAll('h4')[2];
services.textContent = siteContent['main-content']['services-h4'];
services.style.color = 'blue';

const product = document.querySelectorAll('h4')[3];
product.textContent = siteContent['main-content']['product-h4'];
product.style.color = 'blue';

const vision = document.querySelectorAll('h4')[4];
vision.textContent = siteContent['main-content']['vision-h4'];
vision.style.color = 'blue';

const para1 = document.querySelectorAll('p')[0];
para1.textContent = siteContent['main-content']['features-content'];

const para2 = document.querySelectorAll('p')[1];
para2.textContent = siteContent['main-content']['about-content'];

const para3 = document.querySelectorAll('p')[2];
para3.textContent = siteContent['main-content']['services-content'];

const para4 = document.querySelectorAll('p')[3];
para4.textContent = siteContent['main-content']['product-content'];

const para5 = document.querySelectorAll('p')[4];
para5.textContent = siteContent['main-content']['vision-content'];

const contactHeader = document.querySelectorAll('h4')[5];
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactStuff = document.querySelectorAll('.contact p');
contactStuff[0].textContent = siteContent["contact"]["address"];
contactStuff[1].textContent = siteContent["contact"]["phone"];
contactStuff[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector ('footer p');
footer.textContent = siteContent["footer"]["copyright"];

nav[0].style.color = 'green';
nav[1].style.color = 'green';
nav[2].style.color = 'green';
nav[3].style.color = 'green';
nav[4].style.color = 'green';
nav[5].style.color = 'green';

let navMenu = document.querySelector('nav');

const navAppend = document.createElement('a');
navAppend.innerText = 'Other';
navAppend.style.color = 'green';
navMenu.append(navAppend);

const navPrepend = document.createElement('a');
navPrepend.innerText = 'Home';
navPrepend.style.color = 'green';
navMenu.prepend(navPrepend);