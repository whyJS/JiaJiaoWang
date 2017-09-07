
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
};

$res3 = mysqli_query($con,"select * from JR");
class Object{
        var $id;
        var $num;
        var $img;
        var $name;
        var $danjia;
        
    }
    $arr = array();

while($row = mysqli_fetch_array($res3)){
        
        $obj = new Object();
        $obj->id =  $row['id'];
        $obj->num = $row['num'];
         $obj->img =  $row['img'];
        $obj->name = $row['name'];
         $obj->danjia = $row['danjia'];
        Array_push($arr,$obj);  
       

    
    };
    echo json_encode($arr);
?>