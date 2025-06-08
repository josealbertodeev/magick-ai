/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
*/

// passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS
const botaoFiltrar = document.querySelector('.btn-filtrar');

// passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener('click', () => {
    // passo 3 - pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximo = document.querySelector('#preco').value;

    // passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(carta => {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = parseFloat(carta.dataset.preco);

        let mostrarCarta = true;

        // Verificar filtro de categoria
        const temFiltroDeCategoria = categoriaSelecionada !== '';
        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        // Verificar filtro de preço
        const temFiltroDePreco = precoMaximo !== '';
        const cartaAcimaDoPrecoMaximo = parseFloat(precoMaximo) < precoCarta;

        if (temFiltroDePreco && cartaAcimaDoPrecoMaximo) {
            mostrarCarta = false;
        }

        // Aplicar a visibilidade da carta
        if (mostrarCarta) {
            carta.classList.remove('esconder');
            carta.classList.add('mostrar');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});