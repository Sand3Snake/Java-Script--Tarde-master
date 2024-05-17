/*

Number
parseInt
parseFloat

*/
    //conversão de de string para numero
    var idade  = "20"
    console.log(typeof idade, idade)
    var idade  = Number("20")
    console.log(typeof idade, idade)

    //converter boolean para numero

    var number  = Number(false)
    console.log(typeof number, number)
    var number  = Number(true)
    console.log(typeof number, number)

//converter date para numero

var number  = Number(new Date())
console.log(typeof number, number)

//CONVERTER DE STRING PARA NUMERO USANDO USANDO O PARSEINT
var n = "29.23"
console.log(typeof n, n)
console.log(typeof parseInt(n), parseInt(n))

//CONVERTER DE STRING PARA NUMERO USANDO USANDO O PARSEFLOAT
var n = "29.23"
console.log(typeof n, n)
console.log(typeof parseFloat(n), parseFloat(n))
