// aula Javascript
/*
var idade = 12;

if (idade === "12")
{
    console.log("verdade");
} else {
    console.log("falso");
}

// List-> Vetor -> array
var cidades = ["Curitiba" , "Pinhais", "Colombo" ];



// add um elemento ao array
cidades.push("Araucaria");

/*
console.log( cidades[0] );
console.log( cidades[1] );
console.log( cidades[2] );
console.log( cidades[3] );
*/
//loops de repetição
/*
var ini = 0;
var fim = cidades.length - 1;

while(ini < fim)
{
    console.log (cidades[ini]);

    ini = ini + 1;
}

*/
function Oi()
{
    console.log(valor.value);

}

function caps()
{
    console.log(valor.value.toUpperCase())
}
function plm()
{
    var texto = valor.value;
    var letra = texto.charAt(0);
    var tira = texto.substring(1);
    var novo = letra.toUpperCase() + tira.toLowerCase();

    console.log(novo)
}
function contagem()
{
    var numero = valor.value;

    while(numero > 0)
    {
        numero = numero - 1;
        console.log(numero)

    }


}
function impar()
{
    var n = 1;
    while(n < 99)
        {
            n = n + 2;
            console.log(n);
        }
}


