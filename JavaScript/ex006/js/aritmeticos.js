var subtotal = (13 + 1) *5 // Subtotal é  70
var shipping = 0.5 * (13 +1); // Shipping é 7

var total = subtotal + shipping; // Total é 77

var elSub = document.getElementById('subtotal'); // "document.getElementById('subtotal')" -> localiza o elemento dentro do HTML usando o id
elSub.textContent = subtotal; // "elSub.textContent = subtotal" -> Realiza a substituição do texto do html

var elShip = document.getElementById('shipping'); 
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;