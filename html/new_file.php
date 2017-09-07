<?php
header('Access-Control-Allow-Origin:*');
header("content-Type: text/html; charset=utf-8");
$name=$_GET['name'];
$id=$_GET['id'];
$img=$_GET['img'];
$num=$_GET['num'];
$call = $_GET['jsoncallback'];

$con=mysqli_connect("localhost","root","","QF");
// mysqli_query($con,"SET NAMES utf-8");
if (mysqli_connect_errno($con)) 
{ 
    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} else{
	 // echo " asd ";
}
$sql = mysqli_query($con,"select * from JR where id='$id'");

  $row = mysqli_fetch_array($sql);
	
	  if($row)｛
    $row["num"]+=$num; 
    $sql2 = mysqli_query($con,"update `QF`.`JR` set `id`='$id', `num`='$row["num"]', `img`='$img', `name`='name' where `id`='$id' ");
    else{    	
    	$sql2 = mysqli_query($con,"insert into `QF`.`JR` ( `id`, `num`, `img`, `name`) values ( '$id', '$num', '$img', '$name') ");
    };
    if($sql2){
    	$q = array('success' =>0);
    	
    }else{
    	$q = array('success' =>-1);
    	
    };
    echo $call."(".json_encode($q).")";


// while ($row = mysqli_fetch_array($res3)) {
// 	echo "<br>";
// 	echo $row['a1'] . ":".$row['a2'];
// }
?>