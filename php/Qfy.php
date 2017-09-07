
<?php
header('Access-Control-Allow-Origin:*');
header("content-Type: text/html; charset=utf-8");

$con=mysqli_connect("localhost","root","","QF");
// mysqli_query($con,"SET NAMES utf-8");
if (mysqli_connect_errno($con)) 
{ 
    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} else{
	 // echo " asd ";
}
// $res1 = mysqli_query($con,"select * from qifeiye where a1=a");
// $row3 = mysqli_fetch_array($res1);
// echo $row3['a2'];   
  
	$res3 = mysqli_query($con,"select * from QF3");
	
	$z=null;
	while($row = mysqli_fetch_array($res3)){
		
        
       $z .= $row['a2'].'@';
		// echo "<br/>";
		// echo $z[$i];
	
	};
	echo $z;


// while ($row = mysqli_fetch_array($res3)) {
// 	echo "<br>";
// 	echo $row['a1'] . ":".$row['a2'];
// }

?>