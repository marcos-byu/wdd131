const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("primary-nav");

hamburger.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.textContent = isOpen ? "✕" : "☰";
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "images/logan-temple.jpg"
  },
  {
    templeName: "Brasília Brazil",
    location: "Brasília, Brazil",
    dedicated: "2023, September, 17",
    area: 25000,
    imageUrl: "images/brasilia-temple.jpg"
  },
  {
    templeName: "Curitiba Brazil",
    location: "Curitiba, Paraná, Brazil",
    dedicated: "2008, June, 1",
    area: 27850,
    imageUrl: "images/curitiba-temple.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "images/provo-temple.jpg"
  }
];

const gallery = document.querySelector(".gallery");
const filterTitle = document.getElementById("filter-title");
const navLinks = document.querySelectorAll("#primary-nav a");

function getYear(temple) {
  return parseInt(temple.dedicated.split(",")[0]);
}

function createTempleCards(list) {
  gallery.innerHTML = "";
  list.forEach((temple) => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" width="400" height="250" loading="lazy">
    `;
    gallery.appendChild(card);
  });
}

const filters = {
  home: () => temples,
  old: () => temples.filter((temple) => getYear(temple) < 1900),
  new: () => temples.filter((temple) => getYear(temple) > 2000),
  large: () => temples.filter((temple) => temple.area > 90000),
  small: () => temples.filter((temple) => temple.area < 10000)
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = link.dataset.filter;
    createTempleCards(filters[filter]());
    filterTitle.textContent = link.textContent;
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

createTempleCards(temples);
