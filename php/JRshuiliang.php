<?php
header('Access-Control-Allow-Origin:*');
header("content-Type: text/html; charset=utf-8");

$id=$_GET['id'];

$num=$_GET['num'];

$call = $_GET['jsoncallback'];

$con=mysqli_connect("localhost","root","","QF");
// mysqli_query($con,"SET NAMES utf-8");
if (mysqli_connect_errno($con)) 
{ 
    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} else{
	 // echo " asd ";
};
$sql = mysqli_query($con,"update `QF`.`JR` set `num`='$num'  where `id`='$id'");


$sqls = mysqli_query($con,"select * from `QF`.`JR` where id='$id' ");
    while($sql3 = mysqli_fetch_assoc($sqls)){
        if($sql3['num']==$num){
    	$q = array('success' =>0);
    	
    }else{
    	$q = array('success' =>-1);
    	
    };
};
    // echo $call."(".json_encode($q).")";
     echo $call."(".json_encode($q).")";


?>