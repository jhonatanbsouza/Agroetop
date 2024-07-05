const temaEscuro = document.querySelector("span")
const cabecalho = document.querySelector(".cabecalho")
const menuListaItem = document.querySelectorAll(".menu-lista-item")
temaEscuro.onclick = function(){
    if (temaEscuro.textContent == "Escuro"){
        document.body.style.backgroundColor = "#282c27"
        temaEscuro.textContent = "Claro"
        
        menuListaItem[0].style.backgroundColor = "#282c27"
        menuListaItem[1].style.backgroundColor = "#282c27"
        menuListaItem[2].style.backgroundColor = "#282c27"
        menuListaItem.style.color = "#FFFFFF"


    } else {
        document.body.style.backgroundColor = "#FFFFFF"
        temaEscuro.textContent = "Escuro"
        menuListaItem.style.backgroundColor = "#FFFFFF"
    }
}
console.log(temaEscuro)