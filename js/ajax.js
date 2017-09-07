window.onload=function(){
	//ajax
	var xhr = null;
	//获取ajax对象
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject(",microsoft.XMLHttp");
	}
	xhr.onreadystatechange = function(){
		console.log(xhr.readyState);
		switch(xhr.readyState){
			case 0:
				console.log("尚未初始化");
				break;
			case 1:
				console.log("尚未建立连接");
				break;
			case 2:
				console.log("正在发送数据");
				break;
			case 3:
				console.log("正在接收数据");
				break;
			case 4:
				console.log("数据接收完成");
				//处理接收到的数据
				var text = xhr.responseText;
//				console.log(text);
				//json转换
				var arrResult = eval("("+text+")");
				var titles = document.getElementsByClassName("title");
							var itemImgs = document.getElementsByClassName("itemImg");
							for (i = 0;i<titles.length;i++) {
								titles[i].innerHTML = arrResult[i].title;
								itemImgs[i].setAttribute("src",arrResult[i].itemImg);
							}
				$(window).scroll(function(){
					var height = $(".addMore").offset().top;
//					console.log(height);
//					console.log($(window).scrollTop());
					console.log(($(window).scrollTop() >= height-50)&&(titles.length<=(arrResult.length-15)));
//					console.log(titles.length+"、、"+arrResult.length);
					if(($(window).scrollTop() >= height-50)){
						var timer = setTimeout(function(){
							var titles = document.getElementsByClassName("title");
							var itemImgs = document.getElementsByClassName("itemImg");
							var add = "<div class='items col-lg-4 col-md-4 col-md-offset-0 col-md-pull-0 col-sm-4 col-sm-offset-5 col-sm-pull-5 col-xs-7'><h4 class='title'>金融理财 ID:0327</h4><div style='width: 100%;height: 100%;'><img class='img-responsive itemImg' src='../image/image1/1.png'/></div><div class='secView'><button style='width: 30%;height:20%;border-radius: 2px;background: rgb(62,62,62);margin-top: 25%;margin-left: 15%;color: rgb(239,239,239);border: none;'>预览</button><button style='width: 30%;height:20%;border-radius: 2px;background: rgb(62,62,62);margin-top: 0%;margin-left: 5%;color: rgb(239,239,239);border: none;'>选用</button></div></div>"
							if(titles.length<=(arrResult.length-15)){
								for (j = 0;j<15;j++) {
									$(".section")[0].innerHTML+=add;
								}
							}
							for (i = 0;i<titles.length;i++) {
								titles[i].innerHTML = arrResult[i].title;
								itemImgs[i].setAttribute("src",arrResult[i].itemImg);
							}
						},2000,function(){
							clearTimeout(timer);
							timer = null;
						});
					}
				});
				
					
					console.log($(".title").length);
//				$(window).bind("scroll",function(){
////					var winPos1 = parseInt($(".addMore")[0].style.top);
//					var winPos = parseInt($(window).scrollTop());
////					console.log(winPos);
//					console.log(parseInt($(".addMore").scrollTop()));
//				});
//				console.log(eval("("+text+")").length);
//				var objects = text.split(",");
//				for (var i = 0;i<objects.length;i++) {
//					console.log(objects[i]);
//				}
				break;
		}
	}
	xhr.open('get','http://localhost/qifeiyephp/muban.php');
	xhr.send(null);
}
