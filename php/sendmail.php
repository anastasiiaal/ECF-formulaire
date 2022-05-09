<?php

if(isset($_POST['submit'])){
    $to = "*@gmail.com"; // send the query to this address
    $from = trim($_POST['email']); // message author's mail
    $name = $_POST['name']; // message author's name
    
    $subject = "New form submission | Message from $name";

    $content = htmlspecialchars($_POST['message']);
    $content = urldecode($content); // prevents from entering url addresses
    $content = trim($content); // deletes extra spaces

    $message = "
        <h3>Message from:<b> $name </b></h3>
        <h4>Contact email: $from</h4>
        <h4>Message:</h4>
        <p>$content</p>
    ";

    $header="MIME-Version: 1.0\r\n";
    $header.='From:"New query from website"<*@gmail.com>'."\n";
    $header.='Content-Type:text/html; charset="uft-8"'."\n";
    $header.='Content-Transfer-Encoding: 8bit'; 

    if(mail($to,$subject,$message,$header)) {
        header("Location: ../index.html");
    } else {
        echo "there is a problem";
    }
}