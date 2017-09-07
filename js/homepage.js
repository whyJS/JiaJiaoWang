$(function(){
	var isHow1 = true;
	var x=60;
	
	var s = $("#video_1").css("width");
//	console.log("111111"+s);
	var s1 = parseInt(s);
	var s2 = parseFloat(19/34);
	$("#bg-cover").css({"height":s2*s1+"px"});
	var nav_d3_d1_h = $("#nav_d3_d1").css("height");
	var nav_d3_d1_hh = parseInt(nav_d3_d1_h)+60;
		$("#nav_d3").css({"height":nav_d3_d1_hh+"px"});

	//浏览器变化
	$(window).resize(function(){
		var s = $("#video_1").css("height");
		var w = parseInt($("#nav_d3").css("width"));
		if(w<=435)
		{
			var nav_d3_d1_h = $("#nav_d3_d1").css("height");
			var nav_d3_d1_hh = parseInt(nav_d3_d1_h)+30;
			$("#nav_d3").css({"height":nav_d3_d1_hh+"px"});
			
			
		}else{
			$("#nav_d3").css({"height":"380px"});
		}
		$("#bg-cover").css({"height":s});
		
//		x=x-0.1;
//		$("#con1_d1").css({"font-size":x+"px"});
		//获取浏览器宽度
		console.log(window.innerWidth);

	});
	
	$("#nav_top_img1").click(function(){
		if(isHow1==true)
		{
			$("#drop_d1").fadeIn(200);
			$("#drop_d1 ul").css({"transform":"translateY(0px)","transition":"transform 0.25s"});
			$("#nav_top_sp1").text("关闭");
			isHow1=false;
		}else{
			$("#drop_d1").fadeOut(200);
			$("#drop_d1 ul").css({"transform":"translateY(15px)"})
			$("#nav_top_sp1").text("首页");
			isHow1=true;
		}
		
	});
	$("#nav_top_sp1").click(function(){
		if(isHow1==true)
		{
			$("#drop_d1").fadeIn(200);
			$("#drop_d1 ul").css({"transform":"translateY(0px)","transition":"transform 0.25s"});
			$("#nav_top_sp1").text("关闭");
			isHow1=false;
		}else{
			$("#drop_d1").fadeOut(200);
			$("#drop_d1 ul").css({"transform":"translateY(15px)"})
			$("#nav_top_sp1").text("首页");
			isHow1=true;
		}
		
	});
	$("#right_con_d1").mouseover(function(){
		$(this).css({"color":"gray"});
	});$("#right_con_d1").mouseout(function(){
		$(this).css({"color":"white"});
	});
	
	$("#navTop_u1 li").click(function(){
		var idd = $(this).attr("id");
		if($(this).hasClass("ac"))
		{
			
		}else{
			$(this).addClass("ac");
		}
		$("#navTop_u1 li:not(#"+idd+")").removeClass("ac");
	});
	
	//顶部导航栏滚动监听
	 $(window).bind("scroll", function () {  
                var sTop = $(document).scrollTop();  
                var sTop = parseInt(sTop); 
//              console.log(sTop);
                if(sTop>80)
                {
                	$("#navTop").css({"transform":"translateY(65px)","transition":"transform 1s"});
                }else{
                	$("#navTop").css({"transform":"translateY(-65px)","transition":"transform 1s"});
                }
      });
      $("#contian2 a").mouseover(function(){
      	$("#contian2 a div").css({"background":"white"});
      	$(this).css({"color":"rgb(62,163,255)"});
      });  
      $("#contian2 a").mouseout(function(){
      	$("#contian2 a div").css({"background":"rgb(62,163,255)"});
      	$(this).css({"color":"white"});
      });
      
     
      	$("#contian3_d3_d"+1).mouseover(function(){
      		$(this).css({"border":"1px solid rgb(91,176,255)"});
      		$(this).children("span").css({"color":"orange"});
      	});
      	$("#contian3_d3_d"+1).mouseout(function(){
      		$(this).css({"border":"1px solid rgb(209,209,209)"});
      		$(this).children("span").css({"color":"rgb(128, 128, 128)"});
      	});
      	
      	$("#contian3_d3_d"+2).mouseover(function(){
      		$(this).css({"border":"1px solid rgb(91,176,255)"});
      		$(this).children("span").css({"color":"rgb(17,42,175"});
      	});
      	$("#contian3_d3_d"+2).mouseout(function(){
      		$(this).css({"border":"1px solid rgb(209,209,209)"});
      		$(this).children("span").css({"color":"rgb(128, 128, 128)"});
      	});
      
      	$("#contian3_d3_d"+3).mouseover(function(){
      		$(this).css({"border":"1px solid rgb(91,176,255)"});
      		$(this).children("span").css({"color":"orange"});
      	});
      	$("#contian3_d3_d"+3).mouseout(function(){
      		$(this).css({"border":"1px solid rgb(209,209,209)"});
      		$(this).children("span").css({"color":"rgb(128, 128, 128)"});
      	});
      	
      	
      		$("#contian3_d1_d2").css({"color":"white","background":"rgb(91,176,255)"});

      		$("#contian3_d1_d2").mouseover(function(){
   			$("#contian3_d2").css({"display":"block"});
      		$("#contian3_d3").css({"display":"none"});
			$("#contian3_d4").css({"display":"none"});
			$("#contian3_d1_d2").css({"color":"white","background":"rgb(91,176,255)"});
			$("#contian3_d1_d3").css({"color":"rgb(91,176,255)","background":"rgb(239,239,239)"});
			$("#contian3_d1_d4").css({"color":"rgb(91,176,255)","background":"rgb(239,239,239)"});
      		});
      		$("#contian3_d1_d3").mouseover(function(){
   			$("#contian3_d2").css({"display":"none"});
      		$("#contian3_d3").css({"display":"block"});
			$("#contian3_d4").css({"display":"none"});
			$("#contian3_d1_d3").css({"color":"white","background":"rgb(91,176,255)"});
			$("#contian3_d1_d2").css({"color":"rgb(91,176,255)","background":"rgb(239,239,239)"});
			$("#contian3_d1_d4").css({"color":"rgb(91,176,255)","background":"rgb(239,239,239)"});
      		});
      		$("#contian3_d1_d4").mouseover(function(){
   			$("#contian3_d2").css({"display":"none"});
      		$("#contian3_d3").css({"display":"none"});
			$("#contian3_d4").css({"display":"block"});
			$("#contian3_d1_d4").css({"color":"white","background":"rgb(91,176,255)"});
			$("#contian3_d1_d3").css({"color":"rgb(91,176,255)","background":"rgb(239,239,239)"});
			$("#contian3_d1_d2").css({"color":"rgb(91,176,255)","background":"rgb(239,239,239)"});
      		});
      		
			$("#zhiDing").click(function(){
				
			});
});
