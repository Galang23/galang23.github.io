<?php

    /* Attempt MySQL server connection. Assuming you are running MySQL

    server with default setting (user 'root' with no password) */

    //$link = mysqli_connect("127.0.0.1:3306", "root", "");
    $link = mysqli_connect("mysql.serversfree.com:3306", "u298619941_glg", "galang88");
	// Check connection
    if($link === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
    // Attempt create database query execution
    $sql = "CREATE DATABASE demo";
    if(mysqli_query($link, $sql)){
		echo "Database demo created successfully";
    } else {
		echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
	}
   // Close connection
   mysqli_close($link);
?>

