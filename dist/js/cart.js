$(function(){$(".cart-min li ").click(function(){var n=$(this).index();$(".cart-max li").eq(n).addClass("on").siblings().removeClass("on")});var i=2;$(".btl").click(function(){for(var n=i-1;n<i;n++)$(".cart-min").animate({left:-45*n},200),console.log(n);i%=7,7<=++i&&(i=1,$(".cart-min").animate({left:-270},200)),console.log(i)})});