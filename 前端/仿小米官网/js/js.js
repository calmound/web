$(function(){
	//购物车切换图片
	$(".buy_car").mouseover(function(){
		$(".buy_car_spec").stop();
		$(".buy_car_img").attr("src","images/shopcarhover.png");
		$(".buy_car_spec").animate({
			height:"100"
		},200,function(){
				$(".buy_car p").html("购物车中还没有商品，赶紧选购吧！");
			});
	});
	$(".buy_car").mouseout(function(){
		$(".buy_car_spec").stop();
        setTimeout(function(){
            $(".buy_car_img").attr("src","images/shopcar.png");
            $(".buy_car_spec").animate({
                height:"0"
            },200,function(){
                $(".buy_car p").html("");
            });
        },200);
	});

	//小米明星单品切换
	var flag_spec_star = 0;
	$(".left_img").click(function(){
		if(flag_spec_star == 0){
			flag_spec_star = 1;
		}
	});
	$(".right_img").click(function(){
		if(flag_spec_star == 1){
			flag_spec_star = 0;
		}
	});

	
})