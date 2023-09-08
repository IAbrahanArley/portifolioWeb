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
const frases = ["Desenvolvedor Web", "Backend."];
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
