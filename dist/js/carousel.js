function rollOne(){$(".picBox").animate({left:"-200px"},2e3,"linear",function(){$(this).css({left:"0px"}),$(this).children("li").first().remove().clone(!0).appendTo(".picBox")})}$(function(){for(var n=["../img/156568244415_1440x520.jpg","../img/156577209928_1440x520.jpg","../img/155598562358_1000x457.jpg","../img/156516385089_1920x600.jpg","../img/156523228712_1440x520.jpg"],e=n.length,l=0;l<e+1;l++)$(".banner ul").append("<li></li>");for(l=0;l<e;l++)0==l?$(".banner ol").append('<li class="current"></li>'):$(".banner ol").append("<li></li>");$(".banner ul li").css("background-image","url("+n[0]+")"),$.each(n,function(n,e){$(".banner ul li").eq(n).css("background-image","url("+e+")")}),$(".banner").css("height","560px"),$(".banner ul").css("width",100*(e+1)+"%"),$(".banner ol").css("width",20*e+"px"),$(".banner ol").css("margin-left",20*-e*.5-10+"px");var r=0,a=$(window).width();$(window).resize(function(){a=$(window).width(),$(".banner ul li").css({width:a}),clearInterval(t),i(),t=setInterval(i,2e3)}),$(".banner ul li").width(a),$(".banner ol li").mouseover(function(){$(this).addClass("current").siblings().removeClass("current");var n=$(this).index();$(".banner ul").stop().animate({left:-n*a},500),r=n});var t=null;function i(){e<++r?($(".banner ul").css({left:0}).stop().animate({left:-a},500),r=1):$(".banner ul").stop().animate({left:-r*a},500),r==e?$(".banner ol li").eq(0).addClass("current").siblings().removeClass("current"):$(".banner ol li").eq(r).addClass("current").siblings().removeClass("current")}t=setInterval(i,2e3),$(".banner").mouseenter(function(){clearInterval(t),$(".banner i").fadeIn()}).mouseleave(function(){t=setInterval(i,2e3),$(".banner i").fadeOut()}),$(".banner .right").click(function(){i()}),$(".banner .left").click(function(){--r<0?($(".banner ul").css({left:-a*e}).stop().animate({left:-a*(e-1)},500),r=e-1):$(".banner ul").stop().animate({left:-r*a},500),r==e-1?$(".banner ol li").eq(e-1).addClass("current").siblings().removeClass("current"):$(".banner ol li").eq(r).addClass("current").siblings().removeClass("current")})});var startRollOne=setInterval(rollOne,2e3);$(".box").hover(function(){clearInterval(startRollOne)},function(){startRollOne=setInterval(rollOne,2e3)});