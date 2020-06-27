<?php

// Set level of error handling
ini_set('log_errors', 0);
ini_set('display_errors', 0);

require("class.phpmailer.php");

$mail = new PHPMailer();
$mail->IsSendmail();

$mail->From = 'drew@drewgoff.com';
$mail->FromName = 'Info';
$mail->Subject = 'Contact Form: ' . $_REQUEST['name'] . ' ';

$_toName = '';
$_to = 'drew@drewgoff.com';


$mail->AddAddress($_to, $_toName);

$body .= "Name: " . $_REQUEST['name'] . "\n";
$body .= "Email: " . $_REQUEST['from'] . "\n";
$body .= "Tel: " . $_REQUEST['phone'] . "\n";
$body .= "Message: " . $_REQUEST['message'] . "\n";


$mail->Body = $body;

if (!$mail->Send()) {

$_result = $mail->ErrorInfo;
// echo $_result;
// exit('');

} else {

$_result = 'Sent';
}

// proceed to url
header('LOCATION: ' . 'thank-you.html');
exit('');