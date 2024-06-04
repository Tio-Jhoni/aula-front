 function consoante()
{
    var letra = entrada.value;
   

    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U" )
    {
        resposta.innerHTML = "vogal";
    }else{
        resposta.innerHTML = "consoante";
    }

}

function consoante_Alt()
{
    var texto = entrada.value;

    var texto = texto.toLowerCase();

    var vogal = ["a" , "e" , "i" , "o" , "u"];

    var verificacao = vogal.indexOf(texto);
    console.log(verificacao);


    if ( verificacao != -1)
    {
        resposta.innerHTML = "vogal";
    }else{
        resposta.innerHTML = "consoante";
    }
} 
function semana()
{
    var numero = entrada.value;

    if (numero == 1)
        {
            resposta.innerHTML = "Domingo";
        }else if (numero == 2){
            resposta.innerHTML = "Segunda";
        }else if (numero == 3){
            resposta.innerHTML = "Terça";
        }else if (numero == 4){
            resposta.innerHTML = "Quarta";
        }else if (numero == 5){
            resposta.innerHTML = "Quinta";
        }else if (numero == 6){
            resposta.innerHTML = "Sexta";
        }else if (numero == 7) {
            resposta.innerHTML = "Sábado";
        }else{
            resposta.innerHTML = "Número não definido";
        }
}
function semana_Alt()
{
    var texto = entrada.value;
    var dias = [ "Domingo", "Segunda" , "Terça" , "Quarta" , "Quinta" , "Sexta" , "Sábado"];
    var nome = dias[texto - 1];

    if (nome != undefined)
        {
            resposta.innerHTML = nome; 
        }else{
            resposta.innerHTML = "Valor invalido";
        }


    

    
}
function impar()
{
    var n = 1;
    var f = 50;
    while(n < f)
        {
           resposta.innerHTML += n + " "
           
           n += 2;
        }
}
function impar_Alt()
{
    var fim = 50;

    for(var ini = 1; ini <= fim ; ini += 1)
    {
        if ((ini % 2) == 0)
        {
            resposta.innerHTML += ini + " -> Par; "
        } else {
            resposta.innerHTML += ini + " -> Ímpar; "
        }
    }
}
function contrario()
{
    var text = entrada.value;
    var fim = 0;
   

    for (var ini = text.length; ini >= fim ; ini -= 1)
    {
        resposta.innerHTML += text.charAt(ini);
    }

}
//pedir a nota de 10 alunos e diga qual a maior nota

function notaA()
{
    var notas = [];
    var alunos = [
      "Ana"
     , "Paulo"
      , "Maria"
       , "Matheus"
        , "João"
         , "Stefany"
          , "Marcelo"
           , "Marcos"
            , "Mariana"
             , "Benicio"];

    for (var i = 0; i < 10; i += 1)
    {
        var valor = prompt("digite a nota do aluno " + alunos[i]);
        notas.push(valor);
    }
    x = 0;
    var sla = valor[9];
    var verificar = valor[x];
    for (var verde = 10 ; verde < 0 ; verde -= 1)
        {
            
            if (verificar >= sla){
                verde = -1;
            }else{
                x += 1;
                verificar = valor[x];
                // nao sabia como aumentar o valor do array:(
            }
        }
        resposta.innerHTML = verificar;


}