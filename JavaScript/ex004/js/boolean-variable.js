var inStock;
var shipping;

// Variaveis do estilos boolean, tem somente dois valores, true -> verdadeiro e false -> falso
// São muito ultil para realizar alguma validação que consiste em positiva execute parte do código e caso negativa execute outra parte do código
inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping