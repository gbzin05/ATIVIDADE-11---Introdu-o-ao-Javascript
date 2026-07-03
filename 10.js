let distancia = Number(prompt("Digite a distância da viagem (km):"));
let consumo = Number(prompt("Digite o consumo do carro (km por litro):"));
let preco = Number(prompt("Digite o preço do litro da gasolina (R$):"));
let litros = distancia / consumo;
let gastoTotal = litros * preco;
alert("Valor total gasto na viagem: R$ " + gastoTotal);
