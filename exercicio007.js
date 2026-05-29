const precosCarrinho = [10, 20, 30, 40];

const somaCarrinho = precosCarrinho.reduce((acc, p) => acc + p, 0);

console.log(somaCarrinho);