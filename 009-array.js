/*
O que é um Array em JavaScript?
Um array em JavaScript é um tipo de estrutura 
de dados que permite armazenar múltiplos valores 
em uma única variável. Os elementos de um array 
são indexados numericamente, começando do índice 0,
 o que significa que cada elemento tem uma posição 
 específica no array.
*/
//Usando colchetes[]
let array1 = [1, 2, 3, 4, 5];

//Usando o construtor Array()
let array2 = new Array(1, 2, 3, 4, 5);

//Criando um array vazio
let array3 = []

//Arrays podem conter diferentes tipos de dados
let array4 = ["Hello", 42, true];

//Acessando índice do array
let array = [10, 20, 30, 40, 50];
console.log(array[0]); //Saída: 10
console.log(array[2]); //Saída: 30

//Verificando o tamanho do array
let arraylength = [1, 2, 3];
console.log(arraylength.length); //Saída: 3

//Insere um item no final do array
arraylength.push(4);
console.log(arraylength); //Saída: [1, 2, 3, 4]

//Remove um item no final do array
let removedElement = arraylength.pop();
console.log(removedElement); //Saída: 4
console.log(arraylength); // Saída: [1, 2, 3]

//Remove o item na posição do índice
var array5 = [1, 2, 3, 4, 5];

//Índice do item a ser removido
var indice = 2;
array5.splice(indice, 1);
console.log(array5); //Saída: [1, 2, 3, 4, 5]

var array6 = [1, 2, 4, 5];
var indice = 2; //Índice onde você deseja inserir valor
var newValue = 3; //Valor que você deseja inserir

//Insere o novo valor na posição do índice
array6.splice(indice, 0, newValue);

console.log(array6); //Saída: [1, 2, 3, 4, 5]