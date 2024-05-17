/*
    O while é utilizado quando
    queremos executar um bloco de código
    repetidamente enquanto uma condição específica
    for verdadeira. Ele é especialmente útil quando o
    número de iterações não é conhecido antecipadamente ou 
    quando precisamos repetir uma ação até que uma condição 
    específica seja atendida.
*/

//contagem  regressiva usando while
let i = 0;
while (i <= 5)
{
    console.log(i);
    i++;
}

const frutas = ['maçã', 'banana', 'laranja', 'pera', 'melancia']
let j = 0;
while (j < frutas.length)
{
    console.log('Eu gosto de ' + frutas[j]);
    j++;
}

const person =
{
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
}

let key = 0;
while(key in person)
{
    console.log(key + ':' + peson[key])
}

let k = 0;
while (k < 10)
{
    if (k === 5)
    {
        break;
    }
    console.log(k);
    k++
}



