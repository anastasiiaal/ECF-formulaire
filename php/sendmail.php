<?php

if(isset($_POST['submit'])){
    $to = "***@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];

    $body = $name . " " . $from . " " . $message;
    var_dump($body);

    $headers = "From:" . $from;

    // mail($to,$subject,$message,$headers);
    // echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    if(mail($to,$subject,$message,$headers)) {
        echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    } else {
        echo "there is a problem";
    }
}

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require "PHPMailer/src/Exception.php";
// require "PHPMailer/src/PHPMailer.php";
// require "PHPMailer/src/SMTP.php";

// $mail = new PHPMailer(true);

// $mail->CharSet = "UTF-8";

// $name = $_POST["name"];
// $email = $_POST["email"];
// $message = $_POST["message"];

// $body = $name . " " . $email . " " . $message;
// echo $body;
 
// $subject = "[Message from form]";

// $mail->addAddress("***@gmail.com");

// $mail->Subject = $subject;
// $mail->Body = $body;

// $mail->send();


// ini_set('display_errors', 1);
// // ini_set('display_startup_errors', 1);
// // error_reporting(E_ALL);

// // ini_set('SMTP','myserver');
// // ini_set('smtp_port',465);
//     $name = trim($_POST['name']);

//     $to = "***@gmail.com";
//     $from = trim($_POST['email']); // deletes extra spaces if exist

//     $message = htmlspecialchars($_POST['message']);
//     $message = urldecode($message); // to prevent from entering url addresses
//     $message = trim($message); // deletes extra spaces

//     $headers = "From: $from" . "\r\n" . 
//     "Reply-To: $from" . "\r\n" . 
//     "X-Mailer: PHP" . phpversion();

//     if(mail($to, $name, $message, $headers)) {
//         echo "Letter sent";
//     } else {
//         echo "there is a problem";
//     }

