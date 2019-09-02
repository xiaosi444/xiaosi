$(function(){
	$(".pingpai ul li dl").hover(function(){
		$(this).addClass("pos");		
	},function(){
		$(this).removeClass("pos")
	});
	
	$(".remen ul li").hover(function(){
		var index = $(this).index();
	 	$(".jia").eq(index).stop().animate({"width":"160px"},600);
		$(".wb").eq(index).stop().animate({"width":"160px"},600);
		$(".hl").eq(index).stop().animate({"height":"80px"},600);
		$(".hr").eq(index).stop().animate({"height":"80px"},600);
		$(".bd").eq(index).css({"display":"none"});
		$(".remen ul li a").eq(index).css({"display":"block"});
	},function(){
		$(".bd").css({"display":"block"});
		$(".remen ul li a").css({"display":"none"});
		$(".wb").stop().animate({"width":0},600);
		$(".hl").stop().animate({"height":0},600);
		$(".hr").stop().animate({"height":0},600);
		$(".jia").stop().animate({"width":0},600);
	});
	
	$(".haiwai ul li").hover(function(){
		var index= $(this).index();
	    $('.i2').eq(index).css({"animation":"fade 3s infinite ease-in-out"});
	},function(){
		$('.i2').css({"animation-fill-mode":"forwards" });
	});
	
	
	$(".tongkuan-right ul li").hover(function(){
		$(".tongkuan-right ul li:nth-child(2) p").stop().animate({left: 50},500);
		$(".tongkuan-right ul li:nth-child(2) img").stop().animate({right: 90},500);
		$(".tongkuan-right ul li:nth-child(3) p").stop().animate({left: 10},500);
		$(".tongkuan-right ul li:nth-child(3) img").stop().animate({right: 5},500);
	},function(){
		$(".tongkuan-right ul li p").stop().animate({left: 15},500);
		$(".tongkuan-right ul li img").stop().animate({right:70},500);
		$(".tongkuan-right ul li:nth-child(3) p").stop().animate({left: 0},500);
		$(".tongkuan-right ul li:nth-child(3) img").stop().animate({right: 0},500);
	});
/* 	...................................................... */
 $(".zhongxin>ul li").hover(function(){
	 var index = $(this).index();
	 $(".zhongxin>ul>li span").eq(index).stop().animate({top:-50},500);
	 $(".zhongxin>ul>li a").eq(index).stop().animate({top:0},500);
 },function(){
	 $(".zhongxin ul>li span").stop().animate({top:0},500);
	 $(".zhongxin ul>li a").stop().animate({top:50},500);
 })
	
	
	
})
