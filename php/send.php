<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . "/PHPMailer/PHPMailer.php";
require_once __DIR__ . "/PHPMailer/SMTP.php";
require_once __DIR__ . "/PHPMailer/Exception.php";

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();                                            //Send using SMTP
    $mail->CharSet = 'UTF-8';
    $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'anastasia.alexeenko@gmail.com';                  //SMTP username
    $mail->Password   = 'qpzwgjwmrnmaepyb';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('hello@gmail.com', 'Formulaire');
    $mail->addAddress('anastasia.alexeenko@gmail.com', 'Formulaire');

    $mail->isHTML(true);
    $mail->Subject = 'Message from ' . $name;
    $mail->Body    = "Message from user: $name <br>Email: $email <br>Message: $message";

    $mail->send();
    header("Location: ../index.php");
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}