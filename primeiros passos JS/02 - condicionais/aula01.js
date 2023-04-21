/* Desafio:

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustivel do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem */

const precoEtanol = 5.79;   
const precoGasolina = 6.66;
const kmPOrLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const listrosConsumidos = distanciaEmKm / kmPOrLitros

if (tipoCombustivel === 'Etanol'){
   const valorGasto = listrosConsumidos * precoEtanol;

    console.log(valorGasto.toFixed(2));
}
else{
    const valorGasto = listrosConsumidos * precoGasolina;

    console.log(valorGasto.toFixed(2));
}