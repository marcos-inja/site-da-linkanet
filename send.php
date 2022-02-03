<?php
//1 – Definimos Para quem vai ser enviado o email
$para = "seuemail@algo.com";
//2 - resgatar o nome digitado no formulário e  grava na variavel $nome
$nome = $_POST['nome'];
// 3 - resgatar o assunto digitado no formulário e  grava na variavel
//$assunto
$assunto = $_POST['assunto'];
 //4 – Agora definimos a  mensagem que vai ser enviado no e-mail


$mensagem = "<strong>Nome:  </strong>".$nome;
$mensagem .= "<br>  <strong>Email: </strong>".$_POST['email'];
$mensagem .= "<br>  <strong>Assunto: </strong>".$_POST['assunto'];
$mensagem .= "<br>  <strong>Mensagem: </strong>".$_POST['mensagem'];


//5 – agora inserimos as codificações corretas e  tudo mais.
$headers =  "Content-Type:text/html; charset=UTF-8\n";
$headers .= "From:  dominio<emaildosite>\n";
//Vai ser //mostrado que  o email partiu deste email e seguido do nome
$headers .= "X-Sender:  <contato@inja.tk>\n";
//email do servidor //que enviou
$headers .= "X-Mailer: PHP  v".phpversion()."\n";
$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$headers .= "Return-Path:  <emaildosite>\n";
//caso a msg //seja respondida vai para  este email.
$headers .= "MIME-Version: 1.0\n";

mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.
header("location:index.html");
?>
