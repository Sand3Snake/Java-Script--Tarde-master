/*O que é o Laço for em JavaScript?
O laço for é uma estrutura de controle 
que permite executar repetidamente um bloco 
de código um número específico de vezes.
É uma maneira conveniente de iterar sobre 
elementos em uma coleção, como um array,
ou executar uma ação repetida com base em uma 
condição. */

for(let i = 0; i <= 5; i++)
{
    console.log(i);
}

const frutas =  ['maçã', 'banana', 'laranja', 'pera', 'melância']

for(let i = 0; i < frutas.length; i++)
{
    console.log('Eu gosto de ' + frutas[i]);
}

const pessoa =
{
    Nome: 'Suelen',
    Sobrenome: 'Soares',
    Idade: '22',
}

// Este é um loop for...in que itera sobre todas as propriedades enumeráveis de um objeto chamado 'pessoa'.
// 'pessoa' é o nome do objeto sobre o qual estamos iterando.

for (let key in pessoa) 
    // 'key' é uma variável que irá conter o nome de cada propriedade do objeto 'pessoa' durante cada iteração do loop.
  
    // Este console.log() imprime o nome da propriedade atual (key) e seu valor correspondente (pessoa[key]) no console.
 
    // 'key' é o nome da propriedade, enquanto 'pessoa[key]' acessa o valor da propriedade atual.
{
    console.log(key + ': ' + pessoa[key]);
}

for(let i = 0; i < 10; i++)
{
    if(i === 5)
    {
        break; // o break serve para parar o laço de repetição
    }
    console.log(i);
}
