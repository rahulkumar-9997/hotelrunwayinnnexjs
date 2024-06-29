<?php
header('Access-Control-Allow-Origin: https://www.hotelrunwayinn.com');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email content
    $email_content = "
    <p>Name: $name</p>
    <p>Email: $email</p>
    <p>Phone: $phone</p>
    <p>Subject: $subject</p>
    <p>Message: $message</p>
    ";

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email\r\n";

    // Send email
    $to = "booking.runwayInn@gmail.com"; // Change to your email address
    $subject = "Enquiry For Rooms";
    $mail_result = mail($to, $subject, $email_content, $headers);

    if ($mail_result) {
        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
