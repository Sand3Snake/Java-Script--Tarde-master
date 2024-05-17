/*
    OPERADORES LÓGICOS
    E (AND) - && (JAVA SCRIPT) - ((X < 10) && (X > 0))
    OU (OR) - || (JAVA SCRIPT) - ((X < 10) || (X > 0))
    NEGAÇÃO - ! (JAVA SCRIPT) - (!TRUE = FALSE)
*/
// Operador E lógico (&&)
// Retorna verdadeiro se ambos os operandos forem verdadeiros.
// Exemplo: (a && b) é verdadeiro somente se tanto 'a' quanto 'b' forem verdadeiros.
console.log(true && true);   // Saída: true
console.log(true && false);  // Saída: false
console.log(false && true);  // Saída: false
console.log(false && false); // Saída: false

// Operador OU lógico (||)
// Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
// Exemplo: (a || b) é verdadeiro se pelo menos um dos valores 'a' ou 'b' for verdadeiro.
console.log(true || true);   // Saída: true
console.log(true || false);  // Saída: true
console.log(false || true);  // Saída: true
console.log(false || false); // Saída: false

// Operador NÃO lógico (!)
// Inverte o valor do operando booleano.
// Exemplo: !a é verdadeiro se 'a' for falso, e falso se 'a' for verdadeiro.
console.log(!true);  // Saíd,0,a: false
console.log(!false); // Saída: true


let a = 5;
let b = 7;
//E(AND)
if (a >= b && a == b)
{
    console.log("a é maior e igual a b");
}
else
{
    console.log("a não é maior e igual  b");
}

let c = 8;
let d = 7;

//OU(OR)
if(c >= d || c == d)
{
    console.log("c é maior ou igual a d");
}
else
{
    console.log("c não é maior ou igual a d");
}

let e = 9;
let f = 7;

//NEGAÇÃO - !
if (!(e < f || e == f))
{
    console.log("e é maior que ou igual a f");
}
else
{
    console.log("e não é maior ou igual a f");
}
