function abrir_e_fechar_modal(projeto){
    let modal = document.querySelector(".modal-container" + projeto)

    modal.style.display = "block"
   

    addEventListener("click" , (e) =>{
        console.log(e.target.className)
        if(e.target.className == "modal-container" + projeto){
            modal.style.display = "none"
        }
    })
}

function fechar_modal(projeto){
    let modal = document.querySelector(".modal-container" + projeto)
    modal.style.display = "none"
}


    
