<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require '../vendor/autoload.php';


$mail = new PHPMailer(true);

try {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $assunto = $_POST['assunto'];
    $message = $_POST['message'];
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'sandbox.smtp.mailtrap.io'; //insira o servidor smtp
    $mail->SMTPAuth = true;
    $mail->Port = 2525; //insira a porta do servidor smtp 
    $mail->Username = '28f9fd78212427'; //insira o username do servidor smtp
    $mail->Password = '49fb615697a07e'; //insira o password do servidor smtp

    $mail->setFrom('from@example.com', 'Mailer'); /*Insira o email. Caso seja utilizado o servidor do gmail ou outlook
    , este email deve ser a mesma do username do servidor smtp*/
    $mail->addAddress('codesf@hotmail.com', 'Codesf'); //insira o email do destinatário
  
   
    $mail->isHTML(true);                                  
    $mail->Subject = $assunto;
    $mail->Body    = "Nome: ".$name."</br>Email: ".$email.
    "</br>Messagem: ".$message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    header("Location: ../paginas/contatos/contato.html");
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}