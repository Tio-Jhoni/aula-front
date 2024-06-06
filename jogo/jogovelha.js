jQuery(document).ready(function(){

    var tabuleiro = [
        0 , 0 , 0 ,
        0 , 0 , 0 ,
        0 , 0 , 0 ,


    ]
    var jogador= 1;

    var possiblidades = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],

        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],

        [0 , 4 , 8],
        [2 , 4 , 6],
    ];

   
    $(".casa").click(function(){

        var pos = $(this).attr("pos");

        if(tabuleiro[pos] != 0)
        {
            // para a função nesse ponto
            return;
        }


        tabuleiro[pos] = jogador;

        if(jogador == 1)
        {
            $(this).html("X");
            jogador = 2;
        }else{
            $(this).html("O");
            jogador = 1;
        }
        
        
        if (tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2] && tabuleiro[0] != 0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[0]);
        }else if ( tabuleiro[3] == tabuleiro[4] && tabuleiro[4] == tabuleiro[5] && tabuleiro[3] != 0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[0]);
        }else if ( tabuleiro[6] == tabuleiro[7] && tabuleiro[7] == tabuleiro[8] && tabuleiro[6] != 0)
        {
                alert("O vencedor é o jogador: " + tabuleiro[0]);
        }else if ( tabuleiro[0] == tabuleiro[3] && tabuleiro[3] == tabuleiro[6] && tabuleiro[0] != 0 )
        {
                alert("O vencedor é o jogador: " + tabuleiro[0]);
        }else if ( tabuleiro[1] == tabuleiro[4] && tabuleiro[4] == tabuleiro[7] && tabuleiro[1] != 0 )
        {
                alert("O vencedor é o jogador: " + tabuleiro[0]);
        }else if ( tabuleiro[2] == tabuleiro[5] && tabuleiro[5] == tabuleiro[8] && tabuleiro[2] != 0 )
        {
                alert("O vencedor é o jogador: " + tabuleiro[0]);
        }else if ( tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8] && tabuleiro[0] != 0 )
        {
                alert("O vencedor é o jogador: " + tabuleiro[0]);
        }else if ( tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6] && tabuleiro[2] != 0 )
        {
                alert("O vencedor é o jogador: " + tabuleiro[0]);
        }


    });

    $(".bt-novo").click(function(){
        location.reload();

    });

    




    








});