<?php
 
include 'dbConfig.php';
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 $EncodedData = file_get_contents('php://input');
 
 $DecodedData = json_decode($EncodedData,true);
 
$name = $DecodedData['name'];

$email =$DecodedData['email'];
 
$password = $DecodedData['password'];
 
$Sql_Query = "SELECT * FROM User WHERE email = '$email' AND password = '$password' ";
 
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
 
 
if(isset($check)){
 
 $SuccessLoginMsg = 'Data Matched';
 
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
 echo $SuccessLoginJson ; 
 
 }
 
 else{
 
$InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
$InvalidMSGJSon = json_encode($InvalidMSG);
 
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>