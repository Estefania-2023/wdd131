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
    name: "Pearl Doily",
    cost: "13 dollars",
    imageUrl:
    "finalimg/pearlworld2.webp",
    alt: "Aba Nigeria Temple"
  },
  {
    name: "Hello Kitty",
    cost: "9 dollars",
    imageUrl:
    "finalimg/pearlworld4.webp",
    alt: "Manti Utah Temple"
  },
  {
    name: "Pearl Shoes",
    cost: "6.5 dollars",
    imageUrl:
    "finalimg/pearlworld5.webp",
    alt: "Payson Utah Temple"
  },
  {
    name: "Pearl Dog",
    cost: "7.5 dollars",
    imageUrl:
    "finalimg/pearlworld6.webp",
    alt: "Yigo Guam Temple"
  },
  {
    name: "Pearl Cat",
    cost: "8 dollars",
    imageUrl:
    "finalimg/pearlworld7.webp",
    alt: "Washington D.C. Temple"
  },
  {
    name: "Pink Panther",
    cost: "10 dollars",
    imageUrl:
    "finalimg/pearlworld8.webp",
    alt: "Lima Peru Temple"
  },
]

createTempleCard(products);

function createTempleCard(filteredProducts) {
document.querySelector(".card").innerHTML = "";
filteredProducts.forEach(temple => {
  let card = document.createElement("section");
  card.classList.add(`card-${1}`);
  let templeName = document.createElement("h3");
  let cost = document.createElement("p");
  let img = document.createElement("img");

  templeName.textContent = temple.name;
    cost.innerHTML = `<span class="label">Cost:</span> ${temple.cost}`;
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", `${temple.name} Temple`);
  img.style.aspectRatio = "5 / 3";
  img.setAttribute("loading", "lazy");

  card.appendChild(templeName);
  card.appendChild(cost);
  card.appendChild(img);
  
  document.querySelector(".card").appendChild(card);
});
}