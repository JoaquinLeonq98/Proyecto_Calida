function validateEmail (email)  {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};//Validar email
  
function validateTel (tel)  {
    return tel.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}; //Validar telefono
function validateName (nam)  {
    return nam.match(/^[a-zA-Z ]+$/);
};//Valida nombre
  
function validateLname (nam1)  {
    return nam1.match(/^[a-zA-Z ]+$/);
};//Valida apellido
  
function validatepass (pass)  {
    return pass.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{6,}$/);
};//valida contraseña y pide que sea mayor que 5, tenga al menos un dígito, un caracter especial.
  


    
  
