<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

    $retour = mail("***@gmail.com", "Essai", "hello", "From:***@gmail.com");

    if ($retour) {
        echo "<p>Mail a bien été envoyé</p>";
    } else {
        echo "<p>Il y a un problème</p>";
    }

?>  
</body>
</html>

