const btnScrollToTop = document.getElementById("btnScrollToTop");
const whatsappButton = document.querySelector(".whatsapp-button");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnScrollToTop.style.display = "block";

        whatsappButton.style.bottom = "65px";
    } else {
        btnScrollToTop.style.display = "none";

        whatsappButton.style.bottom = "15px";
    }
});
//alert("O site ainda está em desenvolvimento, peço perdão pelos transtornos!") 
 

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

// consumindo api do git hub

const createSlide = () => {
    return $('<div>').addClass('swiper-slide gitcard-content').html()
}
const renderRows = dadosGit => {
    const slides = dadosGit.map(dadoGit => {
        const description = dadoGit.description ? `<span>${dadoGit.description}</span>` : '';
        const language = dadoGit.language ? `<h3>${dadoGit.language}</h3>` : '';
        const slideContent = `
            <div class="swiper-slide gitcard-content">
                <div class="container text-center">
                    <div class="row row-cols-2">
                        <div class="col-8">
                            <h1>${dadoGit.name}</h1>
                        </div>
                        <div class="col-4">
                            ${language}
                        </div>
                        <div class="col-10">
                            
                            ${description}
                            
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-outline-light">
                                <a href="${dadoGit.svn_url}" >More</a>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        `;
        return slideContent;
    });

    $('#my-slides').append(slides);
    iniciarSwiper();
};

const iniciarSwiper = () => {
    var swiper = new Swiper(".mySwiper", {
        autoplay: true,
        enable: true,
        loop: true,
        speed: 3000,
        breakpoints: {

            1000: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                },
            },
            650:{
                slidesPerView: 2,
                grid: {
                    rows: 2,
                },
            },
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                },
            },
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};


const getCadastros = () => {
    $.ajax({
        url: 'https://api.github.com/users/iabrahanarley/repos',
        success: dadosGit => {
            console.log(dadosGit);
            renderRows(dadosGit);
        }
    });
};
getCadastros();