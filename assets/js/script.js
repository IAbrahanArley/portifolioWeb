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



// carrosel 

const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);