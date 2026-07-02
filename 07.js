let salario = parseFloat(prompt("Digite o salário atual do funcionário:"));

let aumento = salario * 0.20;
let novoSalario = salario + aumento;

alert("Novo salário: R$ " + novoSalario.toFixed(2));
