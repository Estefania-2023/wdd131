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


const products = [
    {
      id: "fc-1888",
      name: "Pearl Doily",
      Cost: "13 dollars"
    },
    {
      id: "fc-2050",
      name: "Hello Kitty",
      Cost: "9 dollars"
    },
    {
      id: "fs-1987",
      name: "Pearl Shoes",
      Cost: "6.5 dollars"
    },
    {
      id: "ac-2000",
      name: "Pearl Dog",
      Cost: "7.5 dollars"
    },
    {
      id: "jj-1969",
      name: "Pearl Cat",
      Cost: "8 dollars"
    },
    {
        id: "jj-1969",
        name: "Pink Panther",
        Cost: "10 dollars"
      }
];

const productSelect = document.getElementById("product_name");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
})