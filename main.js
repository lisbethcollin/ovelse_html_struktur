// const title = document.querySelector("h1");
// console.log(title);
// title.textContent = "Dette er overskriften";

// const billede = document.querySelector("img");
// console.log(billede);

// const tekst = document.querySelector("#tekst");
// console.log(tekst);

// const art = document.querySelector("art2");
// console.log(art);

// const footer = document.querySelector("footer");
// console.log(footer);

const underoverskriftH3 = document.querySelector("h3");
//console.log(firstP.textContent);
underoverskriftH3.innerHTML = "Katte næser";

const secondP = document.querySelector("section article:nth-child(2) p");
secondP.innerHTML = "<i>Hej med dig jeg hedder kaj</i>";

const billede1 = document.querySelector("img");
billede1.src = "ko.jpeg";

const billede2 = document.querySelector("section article:nth-child(2) img");
billede2.src = "kat.jpeg";
