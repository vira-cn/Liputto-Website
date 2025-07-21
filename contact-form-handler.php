<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    
    if (!empty($_POST['website'])) {
        exit("Spam erkannt. Nachricht nicht versendet.");
    }

    // Formulardaten
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Empfängeradresse
    $to = "kita@liputto.com";

    // Betreff
    $subject = "Kontaktformular Liputto";

    // E-Mail-Inhalt
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    // Header setzen
    $headers = "From: $email";

    // E-Mail versenden
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
