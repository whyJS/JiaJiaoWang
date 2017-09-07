<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
   function ab(){
   	static $x;
      static $y="cc";
   	$x="aa";
       
   	$y.="$x";
   	echo "$y <br/>";
   }
   ab();
   ab();
   ab();
?>


</body>
</html>