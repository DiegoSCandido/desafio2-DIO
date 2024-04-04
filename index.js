function calcularResultado(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = verificarNivel(vitorias);
  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

function verificarNivel(vitorias) {
  if (vitorias < 10) {
    return 'Ferro';
  } else if (vitorias <= 20) {
    return 'Bronze';
  } else if (vitorias <= 50) {
    return 'Prata';
  } else if (vitorias <= 80) {
    return 'Ouro';
  } else if (vitorias <= 90) {
    return 'Diamante';
  } else if (vitorias <= 100) {
    return 'Lendário';
  } else {
    return 'Imortal';
  }
}

// Exemplo
let resultado = calcularResultado(85, 20); 
console.log(resultado);
