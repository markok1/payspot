<?php
$mailto = "markokostic96@gmail.com";  //My email address

//getting customer data
$name = $_POST['name'];
$city = $_POST['city'];
$adress = $_POST['adress'];
$zip = $_POST['zip'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$pib = $_POST['pib'];
$subject = "Kontakt sa sajta, ovlasceni agent";

$subject2 = "Potvrda: Vaš zahtev je poslat sa payspot.me"; // For customer confirmation

//Email body I will receive
$message = "Ime: " . "\n" . $name . "\n\n" .
"Grad: " . "\n" . $city . "\n\n" .
"Adresa: " . "\n" . $adress . "\n\n" .
"Zip: " . "\n" . $zip . "\n\n" .
"Broj telefona: " . "\n" . $phone . "\n\n" .
"email: " . "\n" . $email . "\n\n" .
"pib/maticni broj firme: " . "\n" . $pib . "\n\n" .
"Poruka: " . "\n" . $_POST['message'];

//Message for client confirmation
$message2 = "Poštovani " . $name . "\n"
. "Vaš zahtev nam je stigao. Odgovorićemo Vam u najkraćem mogućem roku" . "\n\n"
. "Vaša poruka je: " . "\n" . "'" . $_POST['message'] . "'" . "\n\n";

//Email headers
$headers = "From: " . $fromEmail; // Client email, I will receive
$headers2 = "From: " . $mailto; // This will receive client

//PHP mailer function

 $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
 $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client
?>
