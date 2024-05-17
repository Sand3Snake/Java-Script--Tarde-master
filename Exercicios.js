/*
Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.

Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo.

Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.

Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).

Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.

Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.

Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.

Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.
*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    Apresentar() {
        console.log("Nome:", this.nome);
        console.log("Idade:", this.idade);
    }
}
var p = new Pessoa ("Suelen", 22 )
p.Apresentar();



class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    
    calcularArea() {
        return this.largura * this.altura;
    }
    
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
}
// Criando uma instância da classe Retangulo
const retangulo = new Retangulo(5, 3);

// Calculando e exibindo a área e o perímetro do retângulo
console.log("Área do retângulo:", retangulo.calcularArea()); // Saída: Área do retângulo: 15
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro()); // Saída: Perímetro do retângulo: 16



class ContaBancaria {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }
    
    depositar(valor) {
        this.saldo += valor;
    }
    
    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
        }
    }
    
    verificarSaldo() {
        return this.saldo;
    }
}
const conta = new ContaBancaria("João");
conta.verificarSaldo(); // Saída: Saldo atual: $0
conta.depositar(100); // Saída: Depositado $100. Novo saldo: $100
conta.sacar(50); // Saída: Sacado $50. Novo saldo: $50
conta.verificarSaldo(); // Saída: Saldo atual: $50
conta.sacar(100); // Saída: Saldo insuficiente.



class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    
    calcularValorTotal() {
        return this.preco * this.quantidade;
    }
}
// Criando instâncias da classe Produto
const produto1 = new Produto("Lápis", 1.5, 10);
const produto2 = new Produto("Caderno", 5, 3);

// Calculando e exibindo o valor total de cada produto
console.log(`O valor total do ${produto1.nome} é: $${produto1.calcularValorTotal()}`);
console.log(`O valor total do ${produto2.nome} é: $${produto2.calcularValorTotal()}`);



class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    exibirInformacoes() {
        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("Ano:", this.ano);
    }
}
// Criando uma instância da classe Carro
const meuCarro = new Carro("Toyota", "Corolla", 2022);

// Exibindo todas as informações do carro
meuCarro.exibirInformacoes();



class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    
    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
}
// Criando uma instância da classe Aluno
const aluno = new Aluno("João", 12345, [8, 7, 9, 6, 8]);

// Calculando e exibindo a média das notas do aluno
console.log(`A média das notas do(a) aluno(a) ${aluno.nome} é: ${aluno.calcularMedia()}`);



class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    
    exibirInformacoes() {
        console.log("Nome:", this.nome);
        console.log("Tipo:", this.tipo);
    }
}
// Criando uma instância da classe Animal
const animal = new Animal("Leão", "Felino");

// Exibindo uma mensagem com o nome e o tipo do animal
animal.exibirInformacoes();




class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    
    calcularArea() {
        const s = (this.lado1 + this.lado2 + this.lado3) / 2;
        return Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
    }
    
    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}
// Criando uma instância da classe Triangulo
const triangulo = new Triangulo(3, 4, 5);

// Calculando e exibindo o perímetro e a área do triângulo
console.log("Perímetro do triângulo:", triangulo.calcularPerimetro()); // Saída: Perímetro do triângulo: 12
console.log("Área do triângulo:", triangulo.calcularArea()); // Saída: Área do triângulo: 6



class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    
    exibirInformacoes() {
        console.log("Título:", this.titulo);
        console.log("Autor:", this.autor);
        console.log("Ano:", this.ano);
    }
}
// Criando uma instância da classe Livro
const livro = new Livro("A Guerra dos Tronos", "George R. R. Martin", 1996);

// Exibindo todas as informações do livro
livro.exibirInformacoes();



class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
    
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
// Criando uma instância da classe Circulo
const circulo = new Circulo(5);

// Calculando e exibindo o perímetro e a área do círculo
console.log("Perímetro do círculo:", circulo.calcularPerimetro()); // Saída: Perímetro do círculo: 31.41592653589793
console.log("Área do círculo:", circulo.calcularArea()); // Saída: Área do círculo: 78.53981633974483