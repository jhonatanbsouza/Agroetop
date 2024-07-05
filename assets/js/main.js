const temaEscuro = document.querySelector("span")
temaEscuro.onclick = function(){
    if (temaEscuro.textContent == "Escuro"){
        document.body.style.backgroundColor = "#282c27"
        temaEscuro.textContent = "Claro"
    } else {
        document.body.style.backgroundColor = "#FFFFFF"
        temaEscuro.textContent = "Escuro"
    }
}
console.log(temaEscuro)