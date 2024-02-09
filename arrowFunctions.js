// forma mais simples e curta de escrever funções.
// a variavel precisa ser definida primeiro antes de chamar a função pelo fato de não ser uma variavel Var e sim const (não a suporte a hosting nesse caso).
const multiplicacaoNumeroMaior = (number1, number2) => {
        if(number1 >=2 && number2 >= 2){
                return number1 * number2;
                
        }else{
                return 'Digite dois números maiores ou iguais a 2'
        }
}
console.log(multiplicacaoNumeroMaior(3, 4));


//Com um parâmetro não tem a necessidade de usar ().
//uma unica opção de retorno não tem a necessida de usar return.
//um comando (apenas 1 linha de codigo) não tem a necessaidade de usar {}.
//não a suporte a hosting nesse caso.
const apresentacao = nome => `Meu nome é ${nome}`;
//só é possivel chamar a função após declarar a variavel nesse caso.
console.log(apresentacao('Lucas'));