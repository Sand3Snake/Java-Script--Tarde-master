/*
    Adição (+)
    Subtração (-)
    Divisão (/)
    Multiplicação (*)
    Resto da divisão (%)
    Incremento(++)
    Descremento(--)
    Expoente(**)
*/
//operador aritimetico SOMA
let v1 = 2
let v2 = 3
let soma = v1+v2
console.log("A soma e:"+soma)
console.log("A soma e:",v1+v2)//Conversão
console.log("A soma e:"+Number(v1+v2))//Conversão

//operador aritimetico SUBTRAÇÃO
let v3 = 10
let v4 = 5
let subtração = v3-v4
console.log("A subtração e:"+subtração)
console.log("A subtração e:",v3-v4)//Conversão
console.log("A subtração e:"+Number(v3-v4))//Conversão

//operador aritimetico DIVISÃO
let v5 = 10
let v6 = 5
let divisao = v5/v6
console.log("A divisão e:"+divisao)
console.log("A divisão e:",v5/v6)//Conversão
console.log("A divisão e:"+Number(v5/v6))//Conversão

//operador aritimetico multiplicação
let v7 = 10
let v8 = 5
let multi = v7*v8
console.log("A multiplicação e:"+multi)
console.log("A multiplicação e:",v7*v8)//Conversão
console.log("A multiplicação e:"+Number(v7*v8))//Conversão

// Operador aritmético Resto da divisão (%)
let v9 = 10;
let v10 = 5;
let restoDivisao = v9 % v10;
console.log("O resto da divisão é: " + restoDivisao);
console.log("O resto da divisão é:", v9 % v10); // Conversão
console.log("O resto da divisão é:" + Number(v9 % v10)); // Conversão


// Operador de incremento (++)
let v11 = 10;
v11++;
console.log("O resultado do incremento é:", v11++); // Conversão
console.log("O resultado do incremento é:" , Number(v11++)); // Conversão
console.log("O resultado do incremento é:" , Number(v11)); // Conversão

// Operador de decremento (--)
let v12 = 10;
v12--;
console.log("O resultado do decremento é:", v12--); // Conversão
console.log("O resultado do decremento é:", Number(v12)); // Conversão

//Operador Expoente(**)
let base = 2;
let expoente = 3;
let resultado = base ** expoente;
/*
base: Esta é a base da operação de potência. É o número que está sendo elevado à potência.
expoente: Este é o expoente ao qual a base será elevada. Ele especifica quantas vezes a base será multiplicada por ela mesma.
base ** expoente: Esta é a expressão que calcula a potência. Ela eleva a base ao expoente especificado.
 */
console.log("O resultado do expoente é:", resultado);
console.log("O resultado do expoente é:", base ** expoente); // Conversão
console.log("O resultado do expoente é:", Number(base ** expoente)); // Conversão
