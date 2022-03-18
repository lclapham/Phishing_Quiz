<?php

$A = $_POST["userName"];
$B = $_POST["userEmailAddr"];
$C = $_POST["userResults"];


echo "Thank you for taking the Phish-Test.";
echo "<br>";
echo "You are prepared to defeat phishing attempts!";

// create a $dt object with the UTC timezone
// $dt = new DateTime('2016-12-12 12:12:12', new DateTimeZone('UTC'));
// $newDT = new date('l jS \of F Y h:i:s A');
$date = date('l jS \of F Y h:i:s A');
// change the timezone of the object without changing its time
$dt->setTimezone(new $date('America/Los Angeles'));

// format the datetime
// $dt->format('Y-m-d H:i:s T');


$myfile = fopen("phishQuizLog.txt", "a") or die("Unable to open file!");
// $date = date('l jS \of F Y h:i:s A');
fwrite($myfile, $dt . " Score:" . $C . " Name:" . $A . " email:". $B ."\n");
fclose($myfile);
// Notes
?>