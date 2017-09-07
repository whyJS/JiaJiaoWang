
<?php
header('Access-Control-Allow-Origin:*');
header("content-Type: text/html; charset=utf-8");

$name=$_GET['name'];
$pwd=$_GET['pwd'];
$img=$_GET['img'];
$call = $_GET['jsoncallback'];

$con=mysqli_connect("localhost","root","","QF");
// mysqli_query($con,"SET NAMES utf-8");
if (mysqli_connect_errno($con)) 
{ 
    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} else{
	 // echo " asd ";
}
  
    $res1 = mysqli_query($con,"update `QF`.`QF4` set `a`='$name', `b`='$pwd', `c`='$img' where `a`='起飞版' ");
    if($res1){
    	$q = array('success' =>0);
    	
    }else{
    	$q = array('success' =>-1);
    	
    }
    echo $call."(".json_encode($q).")";
	// $res3 = mysqli_query($con,"select * from QF4");
	
	// $z=null;
	// while($row = mysqli_fetch_array($res3)){
		
        
 //       $z .= $row['a2'].'@';

	
	// };
	// echo "";




?>