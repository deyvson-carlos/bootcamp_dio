/*
Desafio:

3) Elabre um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista débito, receber 10% de desconto;
- À vista no dinheiro ou PIX, receber 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal da etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const fromaDePagamento = 1;

if(fromaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}
else if (fromaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}
else if (fromaDePagamento === 3){
    console.log(precoEtiqueta);
}
else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}

