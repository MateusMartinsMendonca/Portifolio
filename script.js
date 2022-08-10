function abrir_modal(projeto){
    let modal = document.querySelector(".modal-container" + projeto)

  
        modal.style.display = "block"
   

    addEventListener("click" , (e) =>{
        console.log(e.target.className)
    })
    
    
}