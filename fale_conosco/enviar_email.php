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
    $mail->Host = 'sandbox.smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Port = 2525;
    $mail->Username = '1fc967c0c62c86';
    $mail->Password = 'd8e79663dd67fb';

    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('codesf@hotmail.com', 'Codesf');   
  
   
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