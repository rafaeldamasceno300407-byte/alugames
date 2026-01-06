function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button'); 

    if (imagem.classList.contains('dashboard__item__img--rented')) {

        let confirmarDevolucao = confirm('Tem certeza que deseja devolver este jogo?');

        if (confirmarDevolucao) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            imprimirJogosAlugados();
        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imprimirJogosAlugados();
    }
}
function imprimirJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(`Quantidade de jogos alugados: ${jogosAlugados.length}`);
}
