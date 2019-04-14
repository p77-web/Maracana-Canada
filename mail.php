<?php
$nom=addslashes(htmlentities($_POST['nom']));
$courriel=addslashes(htmlentities($_POST['courriel']));
$mess=addslashes(htmlentities($_POST['mess']));

if (empty($_POST['nom']))
echo '<body onLoad="alert(\'Merci de remplir le champ Nom\')">';
if (empty($_POST['courriel']))
echo '<body onLoad="alert(\'Merci de saisir votre courriel\')">';
if (empty($_POST['mess']))
echo '<body onLoad="alert(\'Vous ne pouvez pas envoyer un message vide\')">';

//Je verifie que tous les champs sont renseignés 
if ($nom != "" && $courriel != "" && $mess != "") {
	$to = 'paulfarcas13@gmail.com';
	$subject = 'Formulaire en provenance du site internet';
	$message = '
		 <html>
		  <head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
		   <title>Maracana Canada</title>

		  </head>
		  <body>
		  
		   <table>
		 
			<tr>
			 <td>*******************************************</td></tr>
			 <tr><td> Indentifiants du message:</td>
			</tr>
			<tr>
			 <td>Nom: '.$nom.'</td>
			</tr>
		   
			<tr>
			 <td>Courriel: '.$courriel.'</td>
			</tr>
		  
			<tr>
			 <td>message: '.$mess.'</td><tr>
			</tr>
			
			<tr>
			 <td>Adresse du Site : <a href="http://www.maracanacanada.com">www.maracanacanada.com</a></td>
			</tr>
		  
		   <tr>
			 <td>*******************************************</td>
			</tr>
		   
		   </table>
		  </body>
		 </html>
		 ';

	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	// $headers .= 'From: "Site internet de Maracana Canada" '."\r\n";
	// $headers .= "\r\n";

	if (mail($to, $subject, $message, $headers)) // Envoi du message
	{
		echo '<body onLoad="alert(\'Votre message est transmis...\')">';
	}
	else // Non envoy�
	{
		echo '<body onLoad="alert(\'Votre message est non transmis\')">';
	}


  
} else {  
  //j'invite l'utilisateur a remplir tous les champs
	echo '<body onLoad="alert(\'merci de remplir toutes les cases...\')">';
	echo '<meta http-equiv="refresh" content="0;URL=contact.html">';
}
echo '<meta http-equiv="refresh" content="0;URL=contact.html">';
?>