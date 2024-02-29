function contar(){
    const num = parseInt($('#numeroInput').val());

    if(isNaN(num)){
        $('#resultado').text("Digite numeros validos")
        return;
    }

    var resultadoStr = "";
    if(num <= 100000){
        for(cont = 1; cont <= num; cont++ ){
            resultadoStr = resultadoStr + cont + "<br>";
        }

        $('#resultado').html(resultadoStr)
    }else{
        $('#resultado').text("VAI TRAVAR >:(, por favor, não digite este numero: " + num)

    }
}