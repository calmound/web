$(function() {
	//购物车切换图片
	var isHover = false
	var timer1 = null;
	$(".buy_car_img").hover(function() {
		isHover = true;
		$(".buy_car_img").attr("src", "images/shopcarhover.png");
		$(".buy_car_spec").animate({
			height: 100
		}, 200, function() {
			$(".buy_car p").html("购物车中还没有商品，赶紧选购吧！");
		});
	}, function() {
		isHover = false;
		$(this).stop(timer1);
		timer1 = setTimeout(function() {
			if (!isHover) {
				$(".buy_car_spec").animate({
					height: 0
				}, 200, function() {
					$(".buy_car p").html("");
				});
				$(".buy_car_img").attr("src", "images/shopcar.png");
			}
		}, 200);
	});
	$(".buy_car_spec").hover(function() {
		isHover = true;
		$(".buy_car_img").attr("src", "images/shopcarhover.png");
		$(".buy_car_spec").animate({
			height: 100
		}, 200, function() {
			$(".buy_car p").html("购物车中还没有商品，赶紧选购吧！");
		});
	}, function() {
		isHover = false;
		$(this).stop(timer1);
		timer1 = setTimeout(function() {
			if (!isHover) {
				$(".buy_car_spec").animate({
					height: 0
				}, 200, function() {
					$(".buy_car p").html("");
				});
				$(".buy_car_img").attr("src", "images/shopcar.png");
			}
		}, 200);
	});

	//搜索框点击，移入，移出动画
	$(document).click(function() {
		$(".search_extra").hide();
		$(".search_txt").css("border", "1px solid #e0e0e0");
		$(".search_btn").css("border", "1px solid #e0e0e0");
		$(".search_btn").css("border-left", "none");
		$(".hot_word1,.hot_word2").show();
		$(".hot_word1,.hot_word2").animate({
			opacity: 100
		}, 300);
	});
	$(".search_box").click(function() {
		$(".search_extra").show();
		$(".search_txt").css("border", "1px solid #ff6700");
		$(".search_txt").css("border-bottom", "none");
		$(".search_btn").css("border", "1px solid #ff6700");
		$(".search_btn").css("border-left", "none");
		$(".hot_word1,.hot_word2").animate({
			opacity: 0
		}, 300);
		return false;
	});

	// 导航栏显示隐藏的div
	var isHoverNav = false;
	var timer2 = null;

	function changeStateDown(index) {
		switch (index) {
			case 0:
				$(".nav_menu_show1").slideDown(400);
				break;
			case 1:
				$(".nav_menu_show2").slideDown(400);
				break;
			case 2:
				$(".nav_menu_show3").slideDown(400);
				break;
			case 3:
				$(".nav_menu_show4").slideDown(400);
				break;
			case 4:
				$(".nav_menu_show5").slideDown(400);
				break;
			case 5:
				$(".nav_menu_show6").slideDown(400);
				break;
		}
	}

	function changeStateUp(index) {
		switch (index) {
			case 0:
				$(".nav_menu_show1").slideUp(400);
				break;
			case 1:
				$(".nav_menu_show2").slideUp(400);
				break;
			case 2:
				$(".nav_menu_show3").slideUp(400);
				break;
			case 3:
				$(".nav_menu_show4").slideUp(400);
				break;
			case 4:
				$(".nav_menu_show5").slideUp(400);
				break;
			case 5:
				$(".nav_menu_show6").slideUp(400);
				break;
		}
	}
	var preIndex = -1,
		curIndex = -1;
	$(".nav .nav_list li").mouseover(function() {
		curIndex = $(this).index();
		isHoverNav = true;
		changeStateDown(curIndex);
		if (preIndex != -1 && preIndex != curIndex) changeStateUp(preIndex);
		preIndex = curIndex;
		$(this).mouseout(function() {
			isHoverNav = false;
			//$(this).stop(timer2);
			timer2 = setTimeout(function() {
				if (!isHoverNav) {
					changeStateUp(preIndex);
				}
			}, 100);
			return false;
		});
		return false;
	});
	$(".navMenu").mouseover(function() {
		isHoverNav = true;
		changeStateDown(curIndex);
		$(this).mouseout(function() {
			isHoverNav = false;
			//$(this).stop(timer2);
			timer2 = setTimeout(function() {
				if (!isHoverNav) {
					changeStateUp(preIndex);
				}
			}, 100);
			return false;
		})
		return false;
	});

	//明星单品切换
	var dir = 0; //0:left,1:right
	$(".left_img").click(function() {
		if (dir) {
			$(".left_img > img").attr("src", "images/icon/left2.png");
			$(".right_img > img").attr("src", "images/icon/right1.png");
			$(".star_spec .spec_item_list").animate({
				left: "0"
			}, 200);
			dir = 0;
		}
	});
	$(".right_img").click(function() {
		if (dir == 0) {
			$(".left_img > img").attr("src", "images/icon/left1.png");
			$(".right_img > img").attr("src", "images/icon/right2.png");
			$(".star_spec .spec_item_list").animate({
				left: "-1234px"
			}, 200);
			dir = 1;
		}
	});

	//为你推荐单品切换
	var dir_recommend = 0; 
	function changeDir(dir){
		if(dir == 0){
			$(".img1 > img").attr("src", "images/icon/left_b_2.png");
			$(".img2 > img").attr("src", "images/icon/right_b_1.png");
		}else if(dir == 1){
			$(".img1 > img").attr("src", "images/icon/left_b_1.png");
			$(".img2 > img").attr("src", "images/icon/right_b_1.png");
		}else{
			$(".img1 > img").attr("src", "images/icon/left_b_1.png");
			$(".img2 > img").attr("src", "images/icon/right_b_2.png");
		}
	}
	$(".img1").click(function() {
		if (dir > 0) {
			dir--;
			changeDir(dir);
			$(".recommend .recommend_spec_list").animate({
				left: "+=1234px"
			}, 200);
			
		}
	});
	$(".img2").click(function() {
		if (dir < 2) {
			dir++;
			dir = dir%3;
			changeDir(dir);
			$(".recommend .recommend_spec_list").animate({
				left: "-=1234px"
			}, 200);
		}
	});
	$(".match .spec_type_nav > li > a").hover(function() {
		var index = $(this).index();
		$(".match .cur").removeClass("cur");
		$(this).addClass("cur");
	});
	$(".around .spec_type_nav > li > a").hover(function() {
		var index = $(this).index();
		$(".around .cur").removeClass("cur");
		$(this).addClass("cur");
	});
	$(".accessories .spec_type_nav > li > a").hover(function() {
		var index = $(this).index();
		$(".accessories .cur").removeClass("cur");
		$(this).addClass("cur");
	});


});