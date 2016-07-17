<?php
$receiver = "User@Celeron";
$msg = "Halo! Cuma ngetest!";
$title = "Hello,world!";
mail($receiver, $title, $msg);
if(mail){
	echo "Terkirim";
}

?>

