//mostra o menu no modo mobile

function ocultar() {
    let check = document.querySelector("input[type=checkbox]:checked")
    let div = document.getElementById("mobile")
    div.style.display = (check != null) ? "flex" : "none"
}


//valida o formulario de envio 

function validaForm(frm) {

    if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.length < 3) {
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Nome muito curto");
        //Foi definido um focus no campo.
        frm.nome.focus();
        //o form não é enviado.
        return false;
    }
    //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if(frm.email.value.indexOf("@") == -1 ||
      frm.email.value.indexOf(".") == -1 ||
      frm.email.value == "" ||
      frm.email.value == null) {
        alert("Indique um e-mail válido.");
        frm.email.focus();
        return false;
    }

    if(frm.assunto.value == "" || frm.assunto.value.length < 2) {
        alert("Nome do assunto muito pequeno");
        frm.assunto.focus();
        return false;
    }
    //Valida a textArea, que é como validar um campo de texto simples.
    if(frm.mensagem.value == "" || frm.mensagem.value == null) {
        alert("Por favor, escreva uma mensagem.");
        frm.mensagem.focus();
        return false;
    }
}

//altera os cards

function mostrarCard(){

	if(document.getElementById("card2").style.display == "none"){

		//aletara o card que está sendo mostrada
		document.getElementById("card1").style.display = "none"
		document.getElementById("card2").style.display = "flex"

		//alterar o texto da frase-1

		document.getElementById("txt2").style.display = "inline"
		document.getElementById("txt1").style.display = "none"
	} else{

		//aletara o card que está sendo mostrada 
		document.getElementById("card1").style.display = "flex"
		document.getElementById("card2").style.display = "none"

		//alterar o texto da frase-1

		document.getElementById("txt2").style.display = "none"
		document.getElementById("txt1").style.display = "inline"
	}
}
