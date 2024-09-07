<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $name = isset($_POST['nameData']) ? trim($_POST['nameData']) : '';
    $email = isset($_POST['emailData']) ? trim($_POST['emailData']) : '';
    $message = isset($_POST['messageData']) ? trim($_POST['messageData']) : '';

    // Validate inputs
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare email
        $to = "axolotelabs@gmail.com"; // Replace with your email address
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            // Redirect or return success response
            echo "success";
        } else {
            // Redirect or return error response
            echo "error";
        }
    } else {
        echo "Invalid input. Please fill out the form correctly.";
    }
}
?>
