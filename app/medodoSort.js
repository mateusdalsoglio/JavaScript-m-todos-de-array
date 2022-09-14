let btnOderPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOderPorPreco.addEventListener('click', ordenarLivrosPorPreco)


function ordenarLivrosPorPreco(){
    let livosOrdenados =livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livosOrdenados)
}