<?php
/**
 * PHPMailer simple contact form example.
 * If you want to accept and send uploads in your form, look at the send_file_upload example.
 */

//Import the PHPMailer class into the global namespace
use PHP\PHPMailer\src\PHPMailer;
use PHP\PHPMailer\src\SMTP;
use PHP\PHPMailer\src\Exception;

// require '../php/vendor/autoload.php';

if (array_key_exists('to', $_POST)) {
    $err = false;
    $msg = '';
    $email = '';
    //Apply some basic validation and filtering to the subject
   
    //Apply some basic validation and filtering to the query
    if (array_key_exists('query', $_POST)) {
        //Limit length and strip HTML tags
        $query = substr(strip_tags($_POST['query']), 0, 16384);
    } else {
        $query = '';
        $msg = 'No query provided!';
        $err = true;
    }
    //Apply some basic validation and filtering to the name
    if (array_key_exists('name', $_POST)) {
        //Limit length and strip HTML tags
        $name = substr(strip_tags($_POST['name']), 0, 255);
    } else {
        $name = '';
    }
    //Validate to address
    //Never allow arbitrary input for the 'to' address as it will turn your form into a spam gateway!
    //Substitute appropriate addresses from your own domain, or simply use a single, fixed address
    if (array_key_exists('to', $_POST) && in_array($_POST['to'], ['emplinq', 'studinq'], true)) {
        //This needs to be updated ***
        // $to = 'kkuzi@yahoo.com';//ETi email contact for employers
         $to = 'info@227infosec.com';//ETi email contact for employers

        // $to = $_POST['to'] . '@example.com';
    } else {
        //This needs to be updated ***
        // $to = 'karen@thekuzicollaborative.com';//ETi email contact for students
        $to = 'contracts@227infosec.com';//ETi email contact for students

        // $to = 'support@example.com';
    }
    //Make sure the address they provided is valid before trying to use it
    if (array_key_exists('email', $_POST) && PHPMailer::validateAddress($_POST['email'])) {
        $email = $_POST['email'];
    } else {
        $msg .= 'Error: invalid email address provided';
        $err = true;
    }
    if (!$err) {
        $mail = new PHPMailer;
                         //This needs to be updated ***
                            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
                            $mail->SMTPDebug = 2;
                            $mail->isSMTP();
        //This needs to be updated *** Get this from admin
        $mail->Host = 'mail.trainwitheti.com';//Need email server url
        //$mail->Host = 'localhost';
        //This needs to be updated ***
        $mail->Port = 465; // Need specific SMTP port
        // $mail->SMTPSecure = 'ssl';
        //  $mail->SMTPSecure = 'PHPMailer::ENCRYPTION_STARTTLS';
    $mail->SMTPAuth = true;
    //This needs to be updated ***
	$mail->Username = 'inquiries@trainwitheti.com';//This is the email address that will send the emails
	$mail->Password = '7+1vRch3cAId';//This is the password of that account
        $mail->CharSet = PHPMailer::CHARSET_UTF8;
        //It's important not to use the submitter's address as the from address as it's forgery,
        //which will cause your messages to fail SPF checks.
        //Use an address in your own domain as the from address, put the submitter's address in a reply-to
        //This needs to be updated ***
        $mail->setFrom('inquiries@trainwitheti.com', (empty($name) ? 'Inquiry form' : $name));//first spot - this is the college email address
        // $mail->setFrom('contact@example.com', (empty($name) ? 'Contact form' : $name));
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);
        // $mail->Subject = 'Inquiry form: ' . $subject;
        $mail->Body = "Inquiry form submission\n\n" . $query;
        if (!$mail->send()) {
            $msg .= 'Mailer Error: '. $mail->ErrorInfo;
        } else {
            $msg .= 'Message sent!';
        }
    }
} ?>