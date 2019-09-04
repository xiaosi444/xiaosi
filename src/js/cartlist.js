$(function(){
	 $(".cart-min li ").click(function(){
		 var index =$(this).index();
		  $(".cart-max li").eq(index).addClass("on").siblings().removeClass("on");
	 })
	 
	var j =2
	 $(".btl").click(function(){
		/* var len = $(".cart-min li").length-1;
		/* var left = $('.cart-min').position().left;  
		 
		 if(-left <= len*45){
			$(".cart-min").animate({left: (left-45)},200);
		} */
		for(var i=j-1;i<j;i++){
		 	$(".cart-min").animate({left: -(i*45)},200);
		 	console.log(i)	
		 }
		 j = j % 7;
		 j ++ ;
		 
		 if(j >=7){
			 j = 1;
			 $(".cart-min").animate({left: -(6*45)},200)
		 }
		   console.log(j)
	 })
	 
	/* 购物车 */
	$(".gouwu").click(function(){
		var goodId = $(".cart-list-top-right").attr("data-good-id");
		var goodSrc   = $(".con-fangDaIMg img").attr("src");
		var goodtTxt  = $(".cart-list-top-right ul li").html();
		var goodRmb   = $(".rmb").html();
		var goodSecai = $(".secai").text();
		var goodNum   = $(".num").val();
		console.log(goodId)
	 /*   本地存储 */
	   var storage = window.localStorage;
	   var storagestr = storage.daywu ? storage.daywu:'';
	   console.log(storage)
	   var storageobj = convertstorage(storagestr);
	    if(goodId in storageobj){
			storageobj[goodId].num ++;
		}else{
			storageobj[goodId] ={
				"id":goodId,
				"src":goodSrc,
				"txt":goodtTxt,
				"rmb":goodRmb,
				"secai":goodSecai,
				"num":1
			}
		}
		storage.daywu = JSON.stringify(storageobj);
		
		console.log(storage)
	 })
	 
	 function convertstorage(str){
		 if(!str){
			 return {};
		 }
		 return JSON.parse(str);
	 }
	
})
	