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
