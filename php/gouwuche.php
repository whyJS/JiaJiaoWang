
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


  
   $res3 = mysqli_query($con,"select * from QF5");
    
  // class Object{
  //       var $name;
  //       var $pwd;
  //       var $img;
  //   }
  //   $arr = array();
    $z=null;
    while($row = mysqli_fetch_array($res3)){
        // $obj = new Object();
        // $obj->name =  $row['a'];
        // $obj->pwd = $row['b'];
        // $obj->img = $row['c'];
        // Array_push($arr,$obj);
       $z .= $row['a'].'@'.$row['b'].'@'.$row['c'].'@';
    };
    echo $z;
    




?>