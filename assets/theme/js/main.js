let btn;

window.onload = ()=>{
    btn=document.getElementById("btn_formulario");
    btn-addEventListener("click",enviar);
}

function enviar(event){
    //name-form02-6, email-form02-6, phone-form02-6, textarea-form02-6
    frm = document.getElementById("formulario");
     if(frm.checkValidity())
{
    let campo1 = document.getElementById("name-form02-6");
    campo1.value ="";
    let campo2 = document.getElementById("email-form02-6");
    campo2.value ="";
    let campo3 = document.getElementById("phone-form02-6");
    campo3.value ="";
    let campo4 = document.getElementById("textarea-form02-6");
    campo4.value ="";
    let campo5 = document.getElementById("city-form02-6");
    campo5.value ="";
    
}
}