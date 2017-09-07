<?php
header('Access-Control-Allow-Origin:*');
header("content-Type: text/html; charset=utf-8");
$name=$_GET['name'];
$id=$_GET['id'];
$img=$_GET['img'];
$num=$_GET['num'];
$danjia=$_GET['danjia'];
$call = $_GET['jsoncallback'];

$con=mysqli_connect("localhost","root","","QF");
// mysqli_query($con,"SET NAMES utf-8");
if (mysqli_connect_errno($con)) 
{ 
    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} else{
	 // echo " asd ";
};
$sql = mysqli_query($con,"select * from JR where id='$id' ");

  
	
	  if($row = mysqli_fetch_array($sql)){
    $aa = $row['num']+$num; 
    $sql2 = mysqli_query($con,"update `QF`.`JR` set `num`='$aa', `img`='$img', `name`='$name', `danjia`='$danjia'  where `id`='$id' ");
	    }
    else{    	
    	$sql2 = mysqli_query($con,"insert into `QF`.`JR` ( `id`, `num`, `img`, `name`, `danjia`) values ( '$id', '$aa', '$img', '$name', '$danjia') ");
    };
    $sqls = mysqli_query($con,"select * from JR where id='$id' ");
    if($sql3 = mysqli_fetch_assoc($sqls)){
    	$q = array('success' =>0);
    	
    }else{
    	$q = array('success' =>-1);
    	
    };
    echo $call."(".json_encode($q).")";


?>