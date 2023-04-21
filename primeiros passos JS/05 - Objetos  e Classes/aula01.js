/*
Desafio:

1 - Crie uma classe para representar carros.
Os Carros possuem uma marca, uma cor e um gasto médio de combustivel por KM rodado.
Crie um método que dado a quantidade de KM e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.

*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastosDeViagem(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);
const palio = new Carro('Fiat', 'Preto', 1/10)

console.log(uno.calcularGastosDeViagem(70, 5))
