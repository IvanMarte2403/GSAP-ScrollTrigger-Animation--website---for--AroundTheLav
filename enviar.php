<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Aquí puedes procesar los datos del formulario como quieras
    // Por ejemplo, puedes enviar un correo electrónico con los datos del formulario
    $to = "ivanmamz@gmail.com";
    $subject = "Nuevo mensaje de $nombre";
    $body = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

    if (mail($to, $subject, $body)) {
        echo "Mensaje enviado con éxito";
    } else {
        echo "Error al enviar el mensaje";
    }
} else {
    echo "Solicitud no válida";
}
?>