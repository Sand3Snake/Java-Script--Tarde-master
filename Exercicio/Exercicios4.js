/*
    1-Crie uma função construtora chamada Animal que define propriedades para nome 
    e especie. Crie um objeto animal1 com nome "Leão" e espécie "Felino".

    2-Defina uma função construtora Produto que tem propriedades nome, preco, 
    e quantidade. Crie um objeto produto1 com nome "Notebook", preço "2500" e 
    quantidade "5".

    3-Crie uma função construtora Carro com propriedades marca, modelo, e ano.
    Crie um objeto carro1 com marca "Toyota", modelo "Corolla" e ano "2022".

    4-Defina uma função construtora Livro que tenha propriedades titulo, autor e 
    anoPublicacao. Crie um objeto livro1 com título "Dom Casmurro", autor "Machado 
    de Assis" e ano de publicação "1899".

    5-Crie uma função construtora ContaBancaria com propriedades titular, saldo e 
    tipo.Crie um objeto conta1 com titular "João", saldo "5000" e tipo "Corrente".

    6-Defina uma função construtora Cachorro com propriedades raca, cor e idade. 
    Crie um objeto cachorro1 com raça "Labrador", cor "Marrom" e idade "5".

    7-Crie uma função construtora Aluno com propriedades nome, matricula e curso.
    Crie um objeto aluno1 com nome "Maria", matrícula "2021001" e curso "Engenharia 
    Civil".

    8-Defina uma função construtora Restaurante com propriedades nome, endereco e 
    tipoCozinha. Crie um objeto restaurante1 com nome "La Pizzeria", endereço 
    "Rua das Pizzas, 123" e tipo de cozinha "Italiana".

    9-Crie uma função construtora Filme com propriedades titulo, diretor e 
    anoLancamento. Crie um objeto filme1 com título "O Poderoso Chefão", 
    diretor "Francis Ford Coppola" e ano de lançamento "1972".

    10-Defina uma função construtora Funcionario com propriedades nome, cargo e 
    salario. Crie um objeto funcionario1 com nome "Carlos", cargo "Gerente" e 
    salário "7000".
*/
//1
function Animal() {
    this.nome;
    this.especie;
}

let animal1 = new Animal();
animal1.nome = "Leão";
animal1.especie = "Felino";

console.log(animal1.nome); // "Leão"
console.log(animal1.especie); // "Felino"

//2
function Animal() {
    this.nome;
    this.especie;
}

let animal1 = new Animal();
animal1.nome = "Leão";
animal1.especie = "Felino";

console.log(animal1.nome); // "Leão"
console.log(animal1.especie); // "Felino"

//3
function Carro() {
    this.marca;
    this.modelo;
    this.ano;
}

let carro1 = new Carro();
carro1.marca = "Toyota";
carro1.modelo = "Corolla";
carro1.ano = 2022;

console.log(carro1.marca); // "Toyota"
console.log(carro1.modelo); // "Corolla"
console.log(carro1.ano); // 2022

//4
function Livro() {
    this.titulo;
    this.autor;
    this.anoPublicacao;
}

let livro1 = new Livro();
livro1.titulo = "Dom Casmurro";
livro1.autor = "Machado de Assis";
livro1.anoPublicacao = 1899;

console.log(livro1.titulo); // "Dom Casmurro"
console.log(livro1.autor); // "Machado de Assis"
console.log(livro1.anoPublicacao); // 1899

//5
function ContaBancaria() {
    this.titular;
    this.saldo;
    this.tipo;
}

let conta1 = new ContaBancaria();
conta1.titular = "João";
conta1.saldo = 5000;
conta1.tipo = "Corrente";

console.log(conta1.titular); // "João"
console.log(conta1.saldo); // 5000
console.log(conta1.tipo); // "Corrente"


//6
function Cachorro() {
    this.raca;
    this.cor;
    this.idade;
}

let cachorro1 = new Cachorro();
cachorro1.raca = "Labrador";
cachorro1.cor = "Marrom";
cachorro1.idade = 5;

console.log(cachorro1.raca); // "Labrador"
console.log(cachorro1.cor); // "Marrom"
console.log(cachorro1.idade); // 5

//7

function Aluno() {
    this.nome;
    this.matricula;
    this.curso;
}

let aluno1 = new Aluno();
aluno1.nome = "Maria";
aluno1.matricula = 2021001;
aluno1.curso = "Engenharia Civil";

console.log(aluno1.nome); // "Maria"
console.log(aluno1.matricula); // 2021001
console.log(aluno1.curso); // "Engenharia Civil"

//8
function Restaurante(nome, endereco, tipoCozinha) {
    this.nome = nome;
    this.endereco = endereco;
    this.tipoCozinha = tipoCozinha;
}

let restaurante1 = new Restaurante("La Pizzeria", "Rua das Pizzas, 123", "Italiana");

console.log(restaurante1.nome); // "La Pizzeria"
console.log(restaurante1.endereco); // "Rua das Pizzas, 123"
console.log(restaurante1.tipoCozinha); // "Italiana"


//9
function Filme(titulo, diretor, anoLancamento) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.anoLancamento = anoLancamento;
}

let filme1 = new Filme("O Poderoso Chefão", "Francis Ford Coppola", 1972);

console.log(filme1.titulo); // "O Poderoso Chefão"
console.log(filme1.diretor); // "Francis Ford Coppola"
console.log(filme1.anoLancamento); // 1972

//10
function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

let funcionario1 = new Funcionario("Carlos", "Gerente", 7000);

console.log(funcionario1.nome); // "Carlos"
console.log(funcionario1.cargo); // "Gerente"
console.log(funcionario1.salario); // 7000
