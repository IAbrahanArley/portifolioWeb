/* alert("O site ainda esta em desenvolvimento, peço perdao pelos transtornos!") */
const btnScrollToTop = document.getElementById("btnScrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
});

btnScrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// efeito de escrita
const textoElemento = document.getElementById('texto');
const frases = ["Web Developer", "Backend."];
let indiceFrase = 0;
let indiceCaractere = 0;
let escrevendo = true;
let timeout;

function escreverApagarTexto() {
    const fraseAtual = frases[indiceFrase];

    if (escrevendo) {
        textoElemento.textContent = fraseAtual.slice(0, indiceCaractere);
        indiceCaractere++;

        if (indiceCaractere > fraseAtual.length) {
            escrevendo = false;
            timeout = setTimeout(escreverApagarTexto, 400);
        } else {
            timeout = setTimeout(escreverApagarTexto, 60);
        }
    } else {
        textoElemento.textContent = fraseAtual.slice(0, indiceCaractere);
        indiceCaractere--;

        if (indiceCaractere === 0) {
            escrevendo = true;
            indiceFrase = (indiceFrase + 1) % frases.length;
            timeout = setTimeout(escreverApagarTexto, 400);
        } else {
            timeout = setTimeout(escreverApagarTexto, 60);
        }
    }
}

escreverApagarTexto();

// efeito mudar cor do menu

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.menu');
    if (window.scrollY > 50) { // A altura em que deseja que a cor da navbar mude
        navbar.style.backgroundColor = 'white';
        navbar.classList.add('shadow');
    } else {
        navbar.style.backgroundColor = 'transparent'; // Cor da barra de navegação quando no topo
        navbar.classList.remove('shadow');
    }
});

// carrossel
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");
const card = document.querySelectorAll("card")
let current = 0;
let prev = 5;
let next = 1;

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}
const gotoPrev = () => current > 0 ? gotoNum(current -1) : gotoNum(slides.length -1);
const gotoNext = () => current < 5 ? gotoNum(current +1) : gotoNum(0);
const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
        slides[i].classList.remove("card");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }
    if(next == 0){
        next = 0;
    }
    if(prev == -1){
        prev = 5;
    }
    slides[current].classList.add("active");
    slides[current].classList.add("card")
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}