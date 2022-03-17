<?php

echo "Thank you for taking the Phish-Test. You are prepared to defeat phishing attempts!";


$A = $_POST["userName"];
$B = $_POST["userEmailAddr"];
$C = $_POST["userResults"];



$myfile = fopen("phishQuizLog.txt", "a") or die("Unable to open file!");
$date = date('l jS \of F Y h:i:s A');
fwrite($myfile, $date . " Score:" . $C . " Name:" . $A . " email:". $B ."\n");
fclose($myfile);
// Notes
?>