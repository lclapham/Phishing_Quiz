<?php

echo "Thank you! ";


$A = $_POST["userName"];
$B = $_POST["userEmailAddr"];
$C = $_POST["userResults"];



$myfile = fopen("phishQuizLog.txt", "a") or die("Unable to open file!");
$date = date('l jS \of F Y h:i:s A');
fwrite($myfile, $date . " " . $A . " " . $C ."\n");
fclose($myfile);
// Notes
?>