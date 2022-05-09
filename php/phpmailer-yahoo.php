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
    $mail->isSMTP();   //Send using SMTP
    $mail->CharSet = 'UTF-8';
    $mail->Host = 'smtp.mail.yahoo.com'; //Set the SMTP server to send through
    $mail->SMTPAuth = true; //Enable SMTP authentication
    $mail->Username = '*@yahoo.com';  //SMTP username
    $mail->Password = 'hj*';   //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('*@yahoo.com', 'New query from website');
    $mail->addAddress('*@gmail.com', 'New query from website');

    $mail->isHTML(true);
    $mail->Subject = "New form submission | Message from $name";
    $mail->Body    = "<h3>Message from: $name </h3><h4>Contact email: $email </h4><h4>Message:</h4><p> $message</p>";

    $mail->send();
    header("Location: ../index.html");
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}