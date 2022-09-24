const btnMobile = document.querySelector("#btnMenu")

function toggleMenu(){
    let header = document.querySelector("#cabecalho")
    let container = document.querySelector("#container")
    header.classList.toggle("active")

    if (container.className != "hidden"){
        setTimeout(()=>{container.classList.toggle("hidden")}, 600)
    } else{
        container.classList.toggle("hidden")
    }
}

btnMobile.addEventListener("click", toggleMenu)