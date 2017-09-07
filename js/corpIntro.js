$(function(){
	var isShow1 = true;
	$(".inner").css({
					"color":"white"
			});
	$(window).resize(function(){
			if (parseInt(document.body.clientWidth)< 992) {
				$("#homenav2 .navbar-nav").css("display","none");
				
				$("#btn-close").click(function(){
	//				console.log($(".inner")[0]);
					if(isShow1){
						$(".inner")[0].innerHTML = "关闭";
	//					$(".inner").val("关闭");
						$(".border").css("display","none");
//						$("#nav1 .navbar-nav").fadeIn();
						isShow1 = false;
					}else if (!isShow1) {
						$(".inner")[0].innerHTML = "公司介绍";
//						$("#nav1 .navbar-nav").fadeOut();
						isShow1 = true;
					}
				});
			}else{
				$("#homenav2 .navbar-nav").css("display","block");
			}
			if(parseInt(document.body.clientWidth)< 768){
				$(".navbar").css("backgroundColor","rgb(38,38,38)");
			}else{
				$(".navbar").css("backgroundColor","transparent");
			}
		});
		
//	});
	$(window).bind("scroll",function(){
		var winPos = parseInt($(window).scrollTop());
//		console.log(winPos);
		if (winPos>90) {
			$("#nav1").css("display","none");
			$("#nav2").css({
				"top":"0px",
				"width":"100%",
				"transition":"top 2s"
				});
			$(".nav2-bar").css({
				"top":"-110px"
			})
//			$("#nav2").css();
		}else{
//			$("#nav2").css("display","none");
			$("#nav1").css("display","block");
			$("#nav2").css({
				"top":"-60px",
				"width":"100%",
				"transition":"top"
				});
//			$(".navbar").css({
//				"position":"relative",
////				"top":"0px",
//				"background":"rgba(38,38,38,1)",
////				"width":"100%"
//			})
		}
	});
	var isShow2 = true;
	$("#btn-close2").click(function(){
//				console.log($(".inner")[0]);
				if(isShow2){
					$(".inner")[1].innerHTML = "关闭";
//					$(".inner").val("关闭");
					$("#nav2 .navbar-nav").fadeIn();
					isShow2 = false;
				}else if (!isShow2) {
					$(".inner")[1].innerHTML = "公司介绍";
					$("#nav2 .navbar-nav").fadeOut();
					isShow2 = true;
				}
			});
});
