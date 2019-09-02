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
		 // retrun true; 
		
		// console.log(i)
	 })
})   