const numero1 = 10;
const numero2 = 5;

//função declarada.
//funções declaradas e var são 'listadas' no topo.
function multiplicacao(numero1, numero2){
    let resultadoMultiplicacao = numero1 * numero2;
    return resultadoMultiplicacao;
}

//em caso de não definição do parametro é possivel deixar o mesmo com um valor padrão.
//nesse caso o parametro2 recebe 6.
function subtracao(numero1, numero2 = 6){
    let resultadoSubtracao = numero1 - numero2;
    return resultadoSubtracao;
}

function soma(){

   let resultado = numero1 + numero2
    
    //return precisa sempre ser definido ao final de cada função.
    //o que for definido abaixo do return não será executado.
        return resultado;
}

//função que recebe um parâmetro.
function imprimeTexto(resultadoOperacoes){
    console.log(resultadoOperacoes);
}

//chamando uma função dentro de outra função.
//o parâmetro que será puxado vai ser o resultado da função soma.
imprimeTexto(soma());
imprimeTexto(multiplicacao(subtracao(numero1, numero2), subtracao(numero1)));
imprimeTexto(subtracao(50, 30));

//expressão de função, principal diferença é o hoisting, nesse caso não tem suporte a hosting.
//a variavel precisa ser iniciada primeiro antes de chamar a função.
//é possivel adicionar um nome para a função porem nesse caso não é muito utilizado.
const Idade = function(anoA, anoN){ return anoA - anoN}

//chamando a expressão de função. 
console.log(Idade(2024, 1997));
