$(function(){
	var isHow1 = true;
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
			
    $("#navTop_u1 li").click(function(){
		var idd = $(this).attr("id");
		if($(this).hasClass("ac"))
		{
			
		}else{
			$(this).addClass("ac");
		}
		$("#navTop_u1 li:not(#"+idd+")").removeClass("ac");
	});
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
});
