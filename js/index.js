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

const ctaImg = document.getElementById("cta-img"); // Creates a variable that contains the cta-img id
ctaImg.setAttribute('src', siteContent['cta']['img-src']) // Sets the variable to its attributes of source and where its being pulled

const middleImg = document.getElementById("middle-img"); // Creates a variable that contains the middle image id
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']) // Sets the variable to its attributes of source and where its being pulled

const nav = document.querySelectorAll('nav a'); // Creates a variable selecting the nav anchors
nav.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`]
}); // For each nav, its being mapped to each nav link into the siteContent.

const mainHeader = document.querySelector('h1'); // Creates a variable for the main header. Selecting the 'h1' headers within the siteContent.
mainHeader.innerHTML = siteContent.cta.h1; // Sets the main header to what the containing HTML has.

const button = document.querySelector('button'); // Creates the button selector. Selecting the 'button' tag within the siteContent -> cta.
button.textContent = siteContent.cta.button; // Sets the button within the siteContent -> cta to represent the text content of its node.

const features = document.querySelectorAll('h4')[0]; // Creates a feature selector. Selecting all the 'h4' headers, but uses the 1st index.
features.textContent = siteContent['main-content']['features-h4']; // Set the feature within the siteContent -> main-content -> features-h4 to represent the text content of its node.
features.style.color = 'blue'; // alters the text style (font color) to blue.

const about = document.querySelectorAll('h4')[1]; // Creates an about variable that selects all 'h4' headers, but uses the 2nd index.
about.textContent = siteContent['main-content']['about-h4']; // Sets the about within the siteContent -> main-content -> about-h4 to represent the text content of its node.
about.style.color = 'blue'; // alters the text style (font color) to blue.

const services = document.querySelectorAll('h4')[2]; // Creates a services variable that selects all 'h4' headers, but uses the 3rd index.
services.textContent = siteContent['main-content']['services-h4']; // Sets the services within the siteContent -> main-content -> services-h4 to represent the text content of its node.
services.style.color = 'blue'; // alters the text style (font color) to blue.

const product = document.querySelectorAll('h4')[3]; // Creates a product variable that selects all 'h4' headers, but uses the 4th index.
product.textContent = siteContent['main-content']['product-h4']; // Sets the product within the siteContent -> main-content -> product-h4 to represent the text content of its node.
product.style.color = 'blue'; // alters the text style (font color) to blue.

const vision = document.querySelectorAll('h4')[4]; // Creates a vision variable that selects all 'h4' headers, but uses the 5th index.
vision.textContent = siteContent['main-content']['vision-h4']; // Sets the vision within the siteContent -> main-content -> vision-h4 to represent the text content of its node.
vision.style.color = 'blue'; // alters the text style (font color) to blue.

const para1 = document.querySelectorAll('p')[0]; // Creates a para1 variable that selects all the 'p' tags, but uses the 1st index.
para1.textContent = siteContent['main-content']['features-content']; // Sets the para1 within the siteContent -> main-content -> features-content to represent the text content of its node.

const para2 = document.querySelectorAll('p')[1]; // Creates a para1 variable that selects all the 'p' tags, but uses the 2nd index.
para2.textContent = siteContent['main-content']['about-content']; // Sets the para2 within the siteContent -> main-content -> about-content to represent the text content of its node.

const para3 = document.querySelectorAll('p')[2]; // Creates a para1 variable that selects all the 'p' tags, but uses the 3rd index.
para3.textContent = siteContent['main-content']['services-content']; // Sets the para3 within the siteContent -> main-content -> services-content to represent the text content of its node.

const para4 = document.querySelectorAll('p')[3]; // Creates a para1 variable that selects all the 'p' tags, but uses the 4th index.
para4.textContent = siteContent['main-content']['product-content']; // Sets the para4 within the siteContent -> main-content -> product-content to represent the text content of its node.

const para5 = document.querySelectorAll('p')[4]; // Creates a para1 variable that selects all the 'p' tags, but uses the 5th index.
para5.textContent = siteContent['main-content']['vision-content']; // Sets the para5 within the siteContent -> main-content -> vision-content to represent the text content of its node.

const contactHeader = document.querySelectorAll('h4')[5]; // Creates a contactHeader variable that selects all the 'h4' headers, but uses the 5th index.
contactHeader.textContent = siteContent['contact']['contact-h4']; // Sets the contactHeader within the siteContent -> contact -> contact-h4 to represent the text content of its node.

const contactStuff = document.querySelectorAll('.contact p'); // Creates a contactStuff variable that selects all the 'p' tags within the 'contact' class
contactStuff[0].textContent = siteContent["contact"]["address"]; // Sets the contactStuff ('.contact p') 1st index within siteContent -> contact -> address to represent the text content of its node.
contactStuff[1].textContent = siteContent["contact"]["phone"]; // Sets the contactStuff ('.contact p') 2nd index within siteContent -> contact -> phone to represent the text content of its node.
contactStuff[2].textContent = siteContent["contact"]["email"]; // Sets the contactStuff ('.contact p') 3rd index within siteContent -> contact -> email to represent the text content of its node.

let footer = document.querySelector ('footer p'); // Creates a footer variable that selects the 'p' tag within the 'footer' tag.
footer.textContent = siteContent["footer"]["copyright"]; // Sets the footer ('footer p') within siteContent -> footer -> copyright to represent the text content of its node.

nav[0].style.color = 'green'; // Alters the text style (font color) to green. (1st index to 6th)
nav[1].style.color = 'green';
nav[2].style.color = 'green';
nav[3].style.color = 'green';
nav[4].style.color = 'green';
nav[5].style.color = 'green';

let navMenu = document.querySelector('nav'); // Creates a navMenu that selects the whole navigation

const navAppend = document.createElement('a'); // Creates a new navAppend variable of an anchor.
navAppend.innerText = 'Other'; // Makes the new anchor equal to "Other"
navAppend.style.color = 'green'; // Alter the text style (font color) to green.
navMenu.append(navAppend); // Appends or adds to the list of the nav node.

const navPrepend = document.createElement('a'); // Creaetes a new navPrepend variable of an anchor.
navPrepend.innerText = 'Home'; // Makes the new anchor equal to "Home"
navPrepend.style.color = 'green'; // Alter the text style (font color) to green.
navMenu.prepend(navPrepend); // Prepends or adds to the end of the list of the nav node.