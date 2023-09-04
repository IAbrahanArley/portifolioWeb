window.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.bareffect');
    progressBar.classList.add('bareffect');
    const rect = progressBar.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
});
// Botão de voltar ao topo
const btnScrollToTop = document.getElementById("btnScrollToTop");

// Adicione um ouvinte de evento de rolagem para mostrar ou ocultar o botão
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
});

// Adicione um ouvinte de evento de clique para rolar suavemente de volta ao topo
btnScrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
