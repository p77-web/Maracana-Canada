<?php
namespace SendGrid;

require("./sendgrid-php/sendgrid-php.php");

$nom=addslashes(htmlentities($_POST['nom']));
$courriel=addslashes(htmlentities($_POST['courriel']));
$mess=addslashes(htmlentities($_POST['mess']));

// if (empty($_POST['nom']))
// echo '<body onLoad="alert(\'Merci de remplir le champ Nom\')">';
// if (empty($_POST['courriel']))
// echo '<body onLoad="alert(\'Merci de saisir votre courriel\')">';
// if (empty($_POST['mess']))
// echo '<body onLoad="alert(\'Vous ne pouvez pas envoyer un message vide\')">';

use SendGrid\Mail\To;
use SendGrid\Mail\From;
use SendGrid\Mail\Content;
use SendGrid\Mail\Mail;

function helloEmail()
{
    try {
        $from = new From(null, "test@example.com");
        $subject = "Hello World from the Twilio SendGrid PHP Library";
        $to = new To(null, "paulfarcas13@gmail.com");
        $content = new Content("text/plain", "some text here");
        $mail = new Mail($from, $to, $subject, $content);
        $to = new To(null, "test2@example.com");
        $mail->addPersonalization($to);
        //echo json_encode($mail, JSON_PRETTY_PRINT), "\n";
        return $mail;
    } catch (\Exception $e) {
		print $e->getMessage();
        echo $e->getMessage();
    }
    return null;
}

// $request_body = json_decode('{
// 	"personalizations": [
// 	  {
// 		"to": [
// 		  {
// 			"email": "paulfarcas13@gmail.com"
// 		  }
// 		],
// 		"subject": "Hello World from the SendGrid PHP Library!"
// 	  }
// 	],
// 	"from": {
// 	  "email": '.$courriel.'
// 	},
// 	"content": [
// 	  {
// 		"type": "text/plain",
// 		"value": "Hello, Email!"
// 	  }
// 	]
//   }');

  	// $apiKey = getenv('SENDGRID_API_KEY');
	// $sg = new \SendGrid($apiKey);

	// $response = $sg->client->mail()->send()->post($request_body);
	// echo $response->statusCode();
	// echo $response->body();
	// echo $response->headers();

function sendHelloEmail()
{
    $apiKey = getenv('SENDGRID_API_KEY');
    $sg = new \SendGrid($apiKey);
    $request_body = helloEmail();
    
    try {
        $response = $sg->client->mail()->send()->post($request_body);    
        print $response->statusCode() . "\n";
        print_r($response->headers());
        print $response->body() . "\n";
    } catch (Exception $e) {
		print $e->getMessage();
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
}

sendHelloEmail();

//Je verifie que tous les champs sont renseignés 
// if ($nom != "" && $courriel != "" && $mess != "") {
// 	$to = 'paulfarcas13@gmail.com';
// 	$subject = 'Formulaire en provenance du site internet';
// 	$message = '
// 		 <html>
// 		  <head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
// 		   <title>Maracana Canada</title>

// 		  </head>
// 		  <body>
		  
// 		   <table>
		 
// 			<tr>
// 			 <td>*******************************************</td></tr>
// 			 <tr><td> Indentifiants du message:</td>
// 			</tr>
// 			<tr>
// 			 <td>Nom: '.$nom.'</td>
// 			</tr>
		   
// 			<tr>
// 			 <td>Courriel: '.$courriel.'</td>
// 			</tr>
		  
// 			<tr>
// 			 <td>message: '.$mess.'</td><tr>
// 			</tr>
			
// 			<tr>
// 			 <td>Adresse du Site : <a href="http://www.maracanacanada.com">www.maracanacanada.com</a></td>
// 			</tr>
		  
// 		   <tr>
// 			 <td>*******************************************</td>
// 			</tr>
		   
// 		   </table>
// 		  </body>
// 		 </html>
// 		 ';

// 	$headers = 'MIME-Version: 1.0' . "\r\n";
// 	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
// 	$headers .= 'From: "Site internet de Maracana Canada" '."\r\n";
// 	$headers .= "\r\n";

	// if (mail($to, $subject, $message, $headers)) 
	// {
	// 	echo '<body onLoad="alert(\'Votre message est transmis...\')">';
	// }
	// else 
	// {
	// 	echo "Votre message est non transmis";
	// }


  
// } else {  
//   	echo '<body onLoad="alert(\'merci de remplir toutes les cases...\')">';
// 	echo '<meta http-equiv="refresh" content="0;URL=contact.html">';
// }
// echo '<meta http-equiv="refresh" content="0;URL=contact.html">';
?>