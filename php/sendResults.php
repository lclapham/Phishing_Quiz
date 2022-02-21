<?php

echo "SendResults PHP";

echo "<br>";
echo $_POST["userName"];
echo "<br>";
echo $_POST["userEmailAddr"];
echo "<br>";
echo $_POST["userResults"];
echo "<br>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

if (extension_loaded('openssl')) {
    print 'openssl extension loaded.';
}


$mail = new PHPMailer(true);

//Enable SMTP debugging.
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->SMTPDebug = 4;
//Set PHPMailer to use SMTP.
$mail->isSMTP();
//Set SMTP host name                          
// $mail->Host = "secure228.inmotionhosting.com";
$mail->Host = "mail.227infosec.com";

//Set this to true if SMTP host requires authentication to send email
// $mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "info@227infosec.com";
$mail->Password = "1X2=bug@B00";
//If SMTP requires TLS encryption then set it
// $mail->SMTPSecure = "ssl"; 
// $mail->SMTPAutoTLS = false;
// $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                          
//Set TCP port to connect to
// $mail->Port = 587;    

$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->SMTPAuth = FALSE;
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => FALSE,
        'verify_peer_name' => FALSE,
        'allow_self_signed' => TRUE
    )
);



$mail->From = "info@227infosec.com";
$mail->FromName = "Lamar Clapham";

$mail->addAddress("lamar.clapham@gmail.com", "Lamar Clapham");

$mail->isHTML(true);

$mail->Subject =  $_POST["userName"] . " Quiz Results";
// $mail->Body = "<i>Mail body in HTML</i>";

$A = $_POST["userName"];
$B = $_POST["userEmailAddr"];
$C = $_POST["userResults"];
$mail->body = "<p>Hello world</p>";

$body  = "$A " . "completed the Phishing Quiz today"; 
$body .= "<p>$A scored a $C</p>";
$body .= "Sincerely, <br>";
$body .= "227 InfoSec, Inc.";
$mail->Body    = $body;

$body  = "Hello <font size=\"4\">" . $row["full_name"] . "</font>, <p>";
    $body .= "<i>Your</i> personal photograph to this message.<p>";
    $body .= "Sincerely, <br>";
    $body .= "phpmailer List manager";

// $mail->Body =  "<p><php? echo $A?/></p><p><php? echo $B?/></p><p><php? echo $C?/></p>";

$mail->AltBody = "This is the plain text version of the email content";
try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}

//PHPMailer Object
// $mail = new PHPMailer(true); //Argument true in constructor enables exceptions

//From email address and name
// $mail->From = "lamar.clapham@227infosec.com";
// $mail->FromName = "Lamar Clapham";

//To address and name
// $mail->addAddress("lamar.clapham@gmail.com", "Lamar's Gmail");

//Address to which recipient will reply
// $mail->addReplyTo("Do-Not-Reply@227infosec.com", "Reply");

//CC and BCC
// $mail->addCC("cc@example.com");
// $mail->addBCC("bcc@example.com");

//Send HTML or Plain Text email
// $mail->isHTML(true);

// $mail->Subject = "Phishing Test Results";
// $mail->Body = "<i>Mail body in HTML</i>";
// $mail->AltBody = "This is the plain text version of the email content";

// try {
//     $mail->send();
//     echo "Message has been sent successfully";
// } catch (Exception $e) {
//     echo "Mailer Error: " . $mail->ErrorInfo;
// }