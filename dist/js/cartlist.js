$(function(){$(".cart-min li ").click(function(){var t=$(this).index();$(".cart-max li").eq(t).addClass("on").siblings().removeClass("on")});var a=2;$(".btl").click(function(){for(var t=a-1;t<a;t++)$(".cart-min").animate({left:-45*t},200),console.log(t);a%=7,7<=++a&&(a=1,$(".cart-min").animate({left:-270},200)),console.log(a)}),$(".gouwu").click(function(){var t=$(".cart-list-top-right").attr("data-good-id"),a=$(".con-fangDaIMg img").attr("src"),i=$(".cart-list-top-right ul li").html(),n=$(".rmb").html(),o=$(".secai").text();$(".num").val();console.log(t);var l=window.localStorage,c=l.daywu?l.daywu:"";console.log(l);var r=function(t){return t?JSON.parse(t):{}}(c);t in r?r[t].num++:r[t]={id:t,src:a,txt:i,rmb:n,secai:o,num:1},l.daywu=JSON.stringify(r),console.log(l)})});