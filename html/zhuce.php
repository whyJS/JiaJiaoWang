<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-type:text/html; charset = utf-8");
	error_reporting(0);
	$sele = $_REQUEST['name'];
	$uname = $_REQUEST['uname'];
	$pwd = $_REQUEST['pwd'];
//	echo $uname.":".$pwd;
	$con = mysql_connect("127.0.0.1","root","1234");
	$sql = "create database if not exists Users";
	mysql_query($sql,$con);
	echo mysql_error(0);
	$tableSql = "create table if not exists user(
				name varchar(15),
				password varchar(15)
	)";
	mysql_select_db("Users",$con);
	mysql_query($tableSql,$con);

	
	$resUser = mysql_query("select * from user where name = '$uname'");
	$rest = mysql_query("select * from user");
	
	if($uname=="")
	{
		
	}else{
		if(mysql_num_rows($resUser)){
//		echo 'YICUNZAI'	;	
		}else{
			mysql_query("insert into user (name,password) values ('$uname','$pwd')");
	//	echo "成功";
		}
	}
	
	
//	if($sele=='select')
//	{
		class userObj{
			var $name;
			var $password;
		}
		$arr = array();
		while($res = mysql_fetch_array($rest))
		{
			$obj = new userObj();
			$obj->name = $res['name'];
			$obj->password = $res['password'];
//			echo $res['name'].":".$res['password'];
			array_push($arr,$obj);
		}
		echo json_encode($arr);
		
//	}

	?>