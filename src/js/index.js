const listaSelecaoPokedevs = document.querySelectorAll(".pokemon");

listaSelecaoPokedevs.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        esconderCartaoPokedev();

        const idPodeveSelecionado = mostrarCartaoPokedevSelecionado(pokemon);

        desativarPokedevNaListagem();

        ativarPokedevSelecionadoNaListagem(idPodeveSelecionado);
    })
})

function ativarPokedevSelecionadoNaListagem(idPodeveSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPodeveSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const podeveAtivoNaListagem = document.querySelector(".ativo");
    podeveAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokemon) {
    const idPodeveSelecionado = pokemon.attributes.id.value;

    const idDoCartaoPokedevParaAbrir = "cartao-" + idPodeveSelecionado;

    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);

    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPodeveSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
