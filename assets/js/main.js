const temaEscuro = document.querySelector("span")
const cabecalho = document.querySelector(".cabecalho")
const input = document.querySelector(".input-pesquisa")
const usuario = document.querySelector(".usuario")
const menuListaItem = document.querySelectorAll(".menu-lista-item")
temaEscuro.onclick = function(){
    if (temaEscuro.textContent == "Escuro"){
        document.body.style.backgroundColor = "#282c27"
        temaEscuro.textContent = "Claro"
        
        menuListaItem[0].style.backgroundColor = "#282c27"
        menuListaItem[0].style.color = "#FFFFFF"
        menuListaItem[1].style.backgroundColor = "#282c27"
        menuListaItem[2].style.backgroundColor = "#282c27"

        input.style.backgroundColor = "#282c27"
        input.style.color = "#FFFFFF"
        usuario.style.backgroundColor = "#282c27"
        usuario.style.color = "#FFFFFF"

    } else {
        document.body.style.backgroundColor = "#FFFFFF"
        temaEscuro.textContent = "Escuro"

        
        menuListaItem[0].style.backgroundColor = "#FFFFFF"
        menuListaItem[1].style.backgroundColor = "#FFFFFF"
        menuListaItem[2].style.backgroundColor = "#FFFFFF"
        
        input.style.backgroundColor = "#FFFFFF"
        input.style.color = "#000000"
        usuario.style.backgroundColor = "#FFFFFF"
        usuario.style.color = "#000000"
    }
}
console.log(temaEscuro)