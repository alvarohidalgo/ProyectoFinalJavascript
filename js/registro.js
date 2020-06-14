function limpiarErrores(){
  var errores = document.getElementsByClassName("text-danger");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}
function validar(formulario) {
  limpiarErrores();
  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerHTML="El nombre es obligatorio"
    return false;
  }
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerHTML="Campo inválido"
    return false;
  }
  if(formulario.contrasena.value.length<7){
    document.getElementById("errorContrasena").innerHTML="Debe contener por lo menos 7 caracteres"
    return false;
  }
  if(formulario.contrasena.value !== formulario.confirmacion.value){
    document.getElementById("errorConfirmacion").innerHTML="No coincide con contraseña"
    return false;
  }
  if(formulario.tipo.value=="-1") {
    document.getElementById("errorTipo").innerHTML="Este campo es obligatorio"
    return false;
  }
  if(!formulario.acepto.checked){
    document.getElementById("errorAcepto").innerHTML="Este campo es obligatorio"
    return false;
  }
  return true;
}
