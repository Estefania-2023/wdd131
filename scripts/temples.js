let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const h1 = document.querySelector('h1') //added this for h1 

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.

function toggleMenu() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    h1.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});