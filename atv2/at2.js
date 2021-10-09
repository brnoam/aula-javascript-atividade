function validar () {


    if (document.getElementById('nome').value == "") {
     alert('Usuário e/ou Senha estão inválidos.')
     document.getElementById('nome').focus();
        return false
    } else  (document.getElementById('senha').value == "")
     alert (" Você será direcionado para nossa página principal.")
     document.getElementById('senha').focus();
        return false
    }
 