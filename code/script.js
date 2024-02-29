function calc(){
    var num1 = document.getElementById("number1").valueAsNumber;
    var num2 = document.getElementById("number2").valueAsNumber;
    var num3 = document.getElementById("number3").valueAsNumber;
    var media = (num1 + num2 + num3)/3

    if(media >= 6){
        document.getElementById("media").style.color = "green"
    }else{
        document.getElementById("media").style.color = "red"
    }
    document.getElementById("media").textContent = media.toFixed(2);

}