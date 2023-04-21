/*Primeiro desafio

 faça um programa para calcular o valor de uma viagem.

 você terá 3 variáveis. sendo elas: 
    1 - Preço do combustivel;
    2 - Gasto médio de combustivel do carro por KM;
    3 - Distância em KM da viagem;

 Imprima no console o valor que será gasto de combustivel para realizar esta viagem. */

 const precoCombustivel = 5.79;
 const gastoLitroKm = 10;
 const distanciaKm = 100;

 const listrosConsumidos = distanciaKm / gastoLitroKm;
 const valorGasto = listrosConsumidos * precoCombustivel;

 console.log(valorGasto.toFixed(2));
