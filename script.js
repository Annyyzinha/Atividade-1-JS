alert('Bem-vindo ao calculador de média!');

let quantidadeNumeros = parseInt(prompt('Quantos números você deseja digitar para calcular a média?'));

if (isNaN(quantidadeNumeros) || quantidadeNumeros <= 0) {
  alert('Por favor, digite uma quantidade de números válida e maior que zero.');
} else {
  let soma = 0;
  for (let i = 1; i <= quantidadeNumeros; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número:`));

    if (isNaN(numero)) {
      alert('Entrada inválida. Por favor, digite apenas números.');
      i--;
    } else {
      soma += numero;
    }
  }

  let media = soma / quantidadeNumeros;
  document.getElementById('resultadoMedia').textContent = `A média dos números digitados é: ${media.toFixed(2)}`;
}