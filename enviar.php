<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $para = "ivanmamz@gmai.com";
    $asunto = "Cotización Página ";
    $cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

    $cabeceras = "From: $email";

    mail($para, $asunto, $cuerpo, $cabeceras);
}
?>