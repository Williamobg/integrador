const nombre = document.getElementById("name")
const apellido = document.getElementById("lastname")
const mail = document.getElementById("email")
const telefono = document.getElementById("number")
const aviso = document.getElementById("warning")
const form = document.getElementById("formulario")

form.addEventListener("submit",e=> {
    e.preventDefault()
    let alerta = ""
    let regEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let entrar= false
    aviso.innerHTML = ""
    if(nombre.value.length <3){
        alerta += `el nombre no es valido <br>`
        entrar=true
    }
    if(apellido.value.length <2){
        alerta += `el apellido no es valido<br>`
        entrar=true
    }
    
    if(!regEmail.test(mail.value)){
    alerta += `el email no es valido<br>`
    entrar=true
    
    }
    if(entrar){
        aviso.innerHTML= alerta
    }
    else
    {aviso.innerHTML= "enviado"

    }
    
})