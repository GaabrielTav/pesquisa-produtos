const produtos = [
    "Notebook Dell",
    "Mouse Logitech",
    "Teclado Mecânico",
    "Monitor Samsung",
    "Impressora HP",
    "Fone de Ouvido JBL",
    "Cadeira Gamer",
    "Mesa de Escritório"
];

// Selecionando elementos
const inputPesquisa = document.querySelector("#search-input");
const botaoResetar = document.querySelector("#reset-button");
const listarProdutos = document.querySelector("#list-product");

// Função para exibir produtos
function exibirProduto(filtro = "") {
    listarProdutos.innerHTML = ""; // Limpa a lista
console.log('ta certo', exibirProduto)
    // Filtra os produtos
    const produtosFiltrados = produtos.filter((produto) =>
        produto.toLowerCase().includes(filtro.toLowerCase())
    );

    // Exibe os produtos filtrados
    if (produtosFiltrados.length > 0) {
        produtosFiltrados.forEach((produto) => {
            const item = document.createElement("li");
            item.textContent = produto;
            listarProdutos.appendChild(item);
        });
    } else {
        const item = document.createElement("li");
        item.textContent = "Nenhum produto encontrado!";
        listarProdutos.appendChild(item);
    }
}

// Eventos
inputPesquisa.addEventListener("input", (e) => exibirProduto(e.target.value));
botaoResetar.addEventListener("click", () => {
    inputPesquisa.value = "";
    exibirProduto();
});

// Exibir todos os produtos inicialmente
exibirProduto();
