
<?php
header('Access-Control-Allow-Origin:*');
header("content-Type: text/html; charset=utf-8");
$id=$_GET['id'];

$call = $_GET['jsoncallback'];

$con=mysqli_connect("localhost","root","","QF");
// mysqli_query($con,"SET NAMES utf-8");
if (mysqli_connect_errno($con)) 
{ 
    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} else{
	 // echo " asd ";
};
$sql = mysqli_query($con,"delete from `QF`.`JR` where `id`='$id' ");

  $sql5 = mysqli_query($con,"select * from `QF`.`JR` where `id`='$id' ");
	
	  
    if($sql5)
    {
    	$q = array('success' =>1);
    	
    }else{
    	$q = array('success' =>0);
    	
    };
    echo $call."(".json_encode($q).")";



// while ($row = mysqli_fetch_array($res3)) {
// 	echo "<br>";
// 	echo $row['a1'] . ":".$row['a2'];
// }

?>