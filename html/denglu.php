<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-type:text/html; charset = utf-8");
	error_reporting(0);
	$uname_dl = $_REQUEST['name'];
	$pwd_dl = $_REQUEST['pwd'];
	$presName = $_REQUEST['presName'];

	$con = mysql_connect("127.0.0.1","root","1234");

	mysql_select_db("users");
	$tableSql = "create table if not exists preuser(
				name varchar(15),
				password varchar(15)
	)";
	mysql_select_db("Users",$con);
	mysql_query($tableSql,$con);
	echo mysql_error(0);
	if(($uname_dl=="")||($pwd_dl==""))
	{
		
	}else{
		mysql_query("insert into preuser (name,password) values ('$uname_dl','$pwd_dl')");
	}
	
	if($presName=='getName')
	{
		
			
			
			$respreUser = mysql_query('select * from preuser');
			
				class userObj{
					var $name;
					var $password;
				}
				$arr = array();	
				while($res1 = mysql_fetch_array($respreUser))
				{
					$obj = new userObj();
					$obj->name = $res1['name'];
					$obj->password = $res1['password'];
					array_push($arr,$obj);
//					mysql_query("delete from preuser where name='$obj->name'");
				}
				echo json_encode($arr);
				
	}else{
		$resUser = mysql_query('select * from user');
			class userObj{
				var $name;
				var $password;
			}
			$arr = array();
			while($res = mysql_fetch_array($resUser))
			{
				$obj = new userObj();
				$obj->name = $res['name'];
				$obj->password = $res['password'];
	//			echo $res['name'].":".$res['password'];
				array_push($arr,$obj);
			}
			echo json_encode($arr);
	}
			
	
	


?>


