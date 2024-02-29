function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light");

    var imagem = document.querySelector("#profile");
    var btn = document.getElementById("btnStyle");
    var dt = document.getElementById("data");

    var registro = new Date();

    dt = fomatarData(registro);

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "./images/img1.png")
    }else{
        imagem.setAttribute("src", "./images/img2.png")
    }
    dt.textContent = fomatarData(registro);
}

function fomatarData(item){

    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

    return item.tolocaleString("pt-BR", options)
}