<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = "kita@liputto.com";
    
    // Set the email subject
    $subject = "New Contact Form Submission";
    
    // Construct the email body
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    // Set email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
