const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();


function gerarNumeroAleatorio() {
    let numero;
    do{
        numero = parseInt(Math.random() * maiorValor + 1);
    }while(numero < menorValor);
    return numero;
}

console.log(`Numero secreto: ${numeroSecreto}`);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
