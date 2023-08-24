const title = document.querySelector("h1");
console.log(title);
title.textContent = "Dette er overskriften";

const billede = document.querySelector("img");
console.log(billede);

const tekst = document.querySelector("#tekst");
console.log(tekst);

const art = document.querySelector("art2");
console.log(art);

const footer = document.querySelector("footer");
console.log(footer);

const underoverskriftH3 = document.querySelector("h3");
//console.log(firstP.textContent);
underoverskriftH3.innerHTML = "Katte næser";

const secondP = document.querySelector("section article:nth-child(2) p");
secondP.innerHTML = "<i>Hej med dig jeg hedder kaj</i>";
