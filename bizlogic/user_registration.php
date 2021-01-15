<?php

include 'dbconfig.php';

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$EncodedData = file_get_contents('php://input');

$DecodedData = json_decode($EncodedData,true);

$name = $DecodedData['name'];

$email = $DecodedData['email'];

$password = $DecodedData['password'];

$CheckSQL = "SELECT * FROM User WHERE email='$email'";

$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
if(isset($check)){
$EmailExistMSG = 'Email Already Exist, Please Try Again !!!';

$EmailExistJson = json_encode($EmailExistMSG);

echo $EmailExistJson ;
}
else{

    $Sql_Query = "insert into user_details (name,email,password) values ('$name','$email','$password')";


$R =  mysqli_query($con,$Sql_Query);


if($R){

    $MSG = 'User Registered Successfully' ;

    $json = json_encode($MSG);

    echo $json ;
}
else{
echo 'Try Again';
}
}
mysqli_close($con);
?>