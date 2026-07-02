let valorOriginal = parseFloat(prompt("Digite o valor original do par de sapatos:"));

let desconto = valorOriginal * 0.15;
let valorFinal = valorOriginal - desconto;

alert("Valor do desconto: R$ " + desconto.toFixed(2));
alert("Valor final a pagar: R$ " + valorFinal.toFixed(2));
