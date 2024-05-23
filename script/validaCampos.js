let txtBox_Name = document.getElementById("txtBox_Name");
let txtBox_Assunto = document.getElementById("txtBox_Assunto");
let txtBox_Email = document.getElementById("txtBox_Email");
let txtBox_Message = document.getElementById("txtBox_Message");
let information = document.getElementById("information");

function validaName(){
    let txtBox_Name_Value = document.getElementById("txtBox_Name").value;
    let tamanhoMaior3 = txtBox_Name_Value.length;
    return tamanhoMaior3 >= 3;
}
function validaEmail(){
    let txtBox_Email_Value = document.getElementById("txtBox_Email").value;
    let regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(txtBox_Email_Value);
}
function validaTelefone(){
    let txtBox_Phone_Value = document.getElementById("txtBox_Phone").value;
    let regex = /^\d{14}$/;
    return regex.test(txtBox_Phone_Value);
}
function validaAssunto(){
    let txtBox_Assunto_Value = document.getElementById("txtBox_Assunto").value;
    let tamanhoMaior3 = txtBox_Assunto_Value.length;
    return tamanhoMaior3 >= 3;
}
function validaMessage(){
    let txtBox_Message_Value = document.getElementById("txtBox_Message").value;
    let tamanhoMaior3 = txtBox_Message_Value.length;
    return tamanhoMaior3 >= 3;
}

txtBox_Name.addEventListener("keyup",()=>{
    if(validaName() && validaEmail() && validaAssunto() && validaMessage()){
       information.innerText = "";
       document.getElementById("btn_Enviar").disabled = false;
    }else{
        document.getElementById("btn_Enviar").disabled = true;
    }
})
txtBox_Email.addEventListener("keyup",()=>{
    if(validaName() && validaEmail() && validaAssunto() && validaMessage()){
       information.innerText = "";
       document.getElementById("btn_Enviar").disabled = false;
    }else{
        document.getElementById("btn_Enviar").disabled = true;
    }
})

txtBox_Assunto.addEventListener("keyup",()=>{
    if(validaName() && validaEmail() && validaAssunto() && validaMessage()){
       information.innerText = "";
       document.getElementById("btn_Enviar").disabled = false;
    }else{
        document.getElementById("btn_Enviar").disabled = true;
    }
})
txtBox_Message.addEventListener("keyup",()=>{
    if(validaName() && validaEmail() &&  validaAssunto() && validaMessage()){
       information.innerText = "";
       document.getElementById("btn_Enviar").disabled = false;
    }else{
        document.getElementById("btn_Enviar").disabled = true;
    }
})


