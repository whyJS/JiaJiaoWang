$(document).ready(function(){
	$("#select_div1").hover(function(){
	  $("#label1").css("display","inline-block");
	  },
	  function(){
	  $("#label1").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div2").hover(function(){
	  $("#label2").css("display","inline-block");
	  },
	  function(){
	  $("#label2").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div3").hover(function(){
	  $("#label3").css("display","inline-block");
	  },
	  function(){
	  $("#label3").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div4").hover(function(){
	  $("#label4").css("display","inline-block");
	  },
	  function(){
	  $("#label4").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div5").hover(function(){
	  $("#label5").css("display","inline-block");
	  },
	  function(){
	  $("#label5").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div5").hover(function(){
	  $("#label5").css("display","inline-block");
	  },
	  function(){
	  $("#label5").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div6").hover(function(){
	  $("#label6").css("display","inline-block");
	  },
	  function(){
	  $("#label6").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div7").hover(function(){
	  $("#label7").css("display","inline-block");
	  },
	  function(){
	  $("#label7").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div8").hover(function(){
	  $("#label8").css("display","inline-block");
	  },
	  function(){
	  $("#label8").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div9").hover(function(){
	  $("#label9").css("display","inline-block");
	  },
	  function(){
	  $("#label9").css("display","none");
	});
});
$(document).ready(function(){
	$("#select_div10").hover(function(){
	  $("#label10").css("display","inline-block");
	  },
	  function(){
	  $("#label10").css("display","none");
	});
});
// window.onload = function(){
// 			var xhr = null;
// 			//获取ajax对象
// 			if (window.XMLHttpRequest) {
// 				xhr = new XMLHttpRequest();
// 			} else{
// 				xhr = new ActiveXObject("Microsoft.XMLHttp");
// 			}
// 			xhr.onreadystatechange = function(){
// 				console.log(xhr.readyState);
// 				// console.log(JSON.parse(xhr.responseText));
// 				if (xhr.readyState == 4) {
// 				//获取json内容
// 				var json = xhr.responseText;
// 				console.log(json);
// 				console.log("12");
// 				// var jsonObj = JSON.parse(json);
// 				$("#hh0").html(json);
				
				
// 				}
// 			}
// 			//创建请求
// 			xhr.open('get','http://localhost/php/gaishu.php');
// 			xhr.send(null);	
// }

       window.onscroll = function(){ 
            var t1 = document.documentElement.scrollTop || document.body.scrollTop;  
            var select_div1 = document.getElementById( "select_div1" ); 
            if( t1 <= 500 ) { 
                $("#select_div1").css("background","black");
            } else { 
                $("#select_div1").css("background","white");
            } 
            if(t1 <= 1000 && t1 > 500  ) { 
                $("#select_div2").css("background","black");
            } else { 
                $("#select_div2").css("background","white");
            } 
            if(t1 <= 1600 && t1 > 1000 ) { 
                $("#select_div3").css("background","black");
            } else { 
                $("#select_div3").css("background","white");
            } 
            if(t1 <= 2300 && t1 > 1600 ) { 
                $("#select_div4").css("background","black");
            } else { 
                $("#select_div4").css("background","white");
            } 
            if(t1 <= 3000 && t1 > 2300 ) { 
                $("#select_div5").css("background","black");
            } else { 
                $("#select_div5").css("background","white");
            } 
            if(t1 <= 3600 && t1 > 3000) { 
                $("#select_div6").css("background","black");
            } else { 
                $("#select_div6").css("background","white");
            } 
            if(t1 <= 4700 && t1 > 3600) { 
                $("#select_div7").css("background","black");
            } else { 
                $("#select_div7").css("background","white");
            } 
            if(t1 <= 5600 && t1 > 4700) { 
                $("#select_div8").css("background","black");
            } else { 
                $("#select_div8").css("background","white");
            } 
            if(t1 < 5900 && t1 > 5600) { 
                $("#select_div9").css("background","black");
            } else { 
                $("#select_div9").css("background","white");
            } 
            if(t1 >= 5900) { 
                $("#select_div10").css("background","black");
            } else { 
                $("#select_div10").css("background","white");
            } 
        } 
		