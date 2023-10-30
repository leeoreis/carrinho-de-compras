let total = 0;
function limpaCampos() {
  document.getElementById("quantidade").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("selecione-produto").innerHTML = "";
  document.getElementById("selecione-quantidade").innerHTML = "";
}

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidadeProduto = document.getElementById("quantidade").value;

  let mensagemErroProduto = document.getElementById("selecione-produto");
  let mensagemErroQuantidade = document.getElementById("selecione-quantidade");
  if (produto === "" || produto === "selecione") {
    mensagemErroProduto.innerHTML = "Selecione um produto.";
    return;
  }
  if (quantidadeProduto === "") {
    mensagemErroQuantidade.innerHTML = "Insira a quantidade.";
    return;
  }

  let preco = quantidadeProduto * valorUnitario;

  let totalCarrinho = document.getElementById("valor-total");

  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

  total = total + preco;

  totalCarrinho.innerHTML = `R$${total}`;
  limpaCampos();
}

function limpar() {
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML = "";

  let totalCarrinho = document.getElementById("valor-total");
  totalCarrinho.innerHTML = "";

  limpaCampos();
}
