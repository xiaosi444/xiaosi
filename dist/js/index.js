$(function(){$(".pingpai ul li dl").hover(function(){$(this).addClass("pos")},function(){$(this).removeClass("pos")}),$(".remen ul li").hover(function(){var i=$(this).index();$(".jia").eq(i).stop().animate({width:"160px"},600),$(".wb").eq(i).stop().animate({width:"160px"},600),$(".hl").eq(i).stop().animate({height:"80px"},600),$(".hr").eq(i).stop().animate({height:"80px"},600),$(".bd").eq(i).css({display:"none"}),$(".remen ul li a").eq(i).css({display:"block"})},function(){$(".bd").css({display:"block"}),$(".remen ul li a").css({display:"none"}),$(".wb").stop().animate({width:0},600),$(".hl").stop().animate({height:0},600),$(".hr").stop().animate({height:0},600),$(".jia").stop().animate({width:0},600)}),$(".haiwai ul li").hover(function(){var i=$(this).index();$(".i2").eq(i).css({animation:"fade 3s infinite ease-in-out"})},function(){$(".i2").css({"animation-fill-mode":"forwards"})}),$(".tongkuan-right ul li").hover(function(){$(".tongkuan-right ul li:nth-child(2) p").stop().animate({left:50},500),$(".tongkuan-right ul li:nth-child(2) img").stop().animate({right:90},500),$(".tongkuan-right ul li:nth-child(3) p").stop().animate({left:10},500),$(".tongkuan-right ul li:nth-child(3) img").stop().animate({right:5},500)},function(){$(".tongkuan-right ul li p").stop().animate({left:15},500),$(".tongkuan-right ul li img").stop().animate({right:70},500),$(".tongkuan-right ul li:nth-child(3) p").stop().animate({left:0},500),$(".tongkuan-right ul li:nth-child(3) img").stop().animate({right:0},500)}),$(".zhongxin>ul li").hover(function(){var i=$(this).index();$(".zhongxin>ul>li span").eq(i).stop().animate({top:-50},500),$(".zhongxin>ul>li a").eq(i).stop().animate({top:0},500)},function(){$(".zhongxin ul>li span").stop().animate({top:0},500),$(".zhongxin ul>li a").stop().animate({top:50},500)})});