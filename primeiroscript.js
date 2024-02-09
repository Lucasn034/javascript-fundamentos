let questaoNome  = prompt('Qual o seu nome?').toLowerCase();
let questaoIdade = prompt('Qual a sua Idade?');

//\n quebra de linha
console.log(`Nome: ${questaoNome} \n Idade: ${questaoIdade}`);

// if(questaoNome == 'lucas'){
//     console.log('Colaborador Cadastrado')
// }else{
//     console.log ('Colaborador não Cadastrado!');
// }

//operador ternário, forma resumida de criar uma condicional
console.log(questaoNome == 'lucas' ? 'Colaborador Cadastrado' : 'Colaborador não cadastrado');

//Comparação entre tipos de variaveis
let texto = '10';
let numero = 10; 

// == só compara o valor
console.log (texto == numero);

// === compara o valor e o tipo de dado
console.log (texto === numero);

//typeof - Saber qual o tipo de dado que a variavel esta armazenando
console.log(typeof texto);
console.log(typeof numero);

//Conversão explicita 
//number();
console.log (numero + Number(texto));

//string();
console.log (String(numero) + texto);

