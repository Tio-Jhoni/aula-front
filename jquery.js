

jQuery(document).ready(function(){
    
    

    $("h3").click(function()
    {
        var colorir = $("#cor").val();
        $(this).css("color" , colorir);
    });

    

    $(".bt").click(function()
    {
        
        $(".campo input, .campo select").removeClass("erro");
        

        var usuario = $("#nome").val();
        if(usuario.trim().length < 3)
        {
            alert("O campo nome é obrigatório");
            $("#nome").addClass("erro");
        }  
        var escolha = $("#sexo").val();
        if(escolha == "")
        {
            alert("O campo sexo é obrigatório");
            $("#sexo").addClass("erro");
        }
        
        
    });
});



    









