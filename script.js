// Lista de produtos
const produtos = [
    { nome: "Notebook Dell", tipo: "Eletrônicos", preco: 3500 },
    { nome: "Mouse Logitech", tipo: "Eletrônicos", preco: 120 },
    { nome: "Teclado Mecânico", tipo: "Eletrônicos", preco: 250 },
    { nome: "Monitor Samsung", tipo: "Eletrônicos", preco: 800 },
    { nome: "Impressora HP", tipo: "Eletrônicos", preco: 500 },
    { nome: "Fone de Ouvido JBL", tipo: "Eletrônicos", preco: 200 },
    { nome: "Cadeira Gamer", tipo: "Móvel", preco: 1200 },
    { nome: "Mesa de Escritório", tipo: "Móvel", preco: 700 }
];

// Selecionando elementos
const inputPesquisa = document.querySelector("#search-input");
const botaoResetar = document.querySelector("#reset-button");
const listaProdutos = document.querySelector("#list-product");
const filtroTipo = document.querySelector("#tipo-select");
const filtroPrecoMin = document.querySelector("#preco-min");
const filtroPrecoMax = document.querySelector("#preco-max");


// Função para exibir produtos com filtros
function exibirProdutos(filtroNome = "") {
    // Limpa a lista
    listaProdutos.innerHTML = "";

    // Filtra os produtos com base nos critérios
    const produtosFiltrados = produtos.filter((produto) => {
        const nomeCondicao = produto.nome.toLowerCase().includes(filtroNome.toLowerCase());
        const tipoCondicao = filtroTipo.value === "" || produto.tipo === filtroTipo.value;
        const precoMinCondicao = filtroPrecoMin.value === "" || produto.preco >= Number(filtroPrecoMin.value);
        const precoMaxCondicao = filtroPrecoMax.value === "" || produto.preco <= Number(filtroPrecoMax.value);

        // Retorna verdadeiro apenas se todas as condições forem atendidas
        return nomeCondicao && tipoCondicao && precoMinCondicao && precoMaxCondicao;
    });

    // Exibe os produtos filtrados ou mensagem de erro
    if (produtosFiltrados.length > 0) {
        produtosFiltrados.forEach((produto) => {
            const item = document.createElement("li");
            item.textContent = `${produto.nome} - ${produto.tipo} - R$ ${produto.preco.toFixed(2)}`;
            listaProdutos.appendChild(item);
        });
    } else {
        const item = document.createElement("li");
        item.textContent = "Nenhum produto encontrado.";
        listaProdutos.appendChild(item);
    }
}

// Eventos
inputPesquisa.addEventListener("input", (e) => exibirProdutos(e.target.value));
filtroTipo.addEventListener("change", () => exibirProdutos(inputPesquisa.value));
filtroPrecoMin.addEventListener("input", () => exibirProdutos(inputPesquisa.value));
filtroPrecoMax.addEventListener("input", () => exibirProdutos(inputPesquisa.value));
