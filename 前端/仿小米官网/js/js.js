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

	//热门

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

	//首页大图切换
	$(".category_move span").click(function(){
		$(".category_move span").removeClass("cur_move");
		$(this).addClass("cur_move");

		var index = $(this).parent().index();
		$(".category_hot_list > li").css("display","none");
		$(".category_hot_list > li:eq("+index+")").css("display","block");
	});

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

	//category栏的category_item_box显示隐藏
	$(".category_item").hover(function(){
		var index = $(this).index();
		$(".category_item_box:eq("+index+")").css("display","block");
			var category_item_list = $(this).find(".category_item_box").children(".category_item_list");
			var width = $(this).index() == 0 ? 270 : 220;
			var len = category_item_list.length;
			category_item_list.width(width);
			width = len == 1 ? len*width : len*width + 70;
			$(".category_list .category_item_box").width(width);
			console.log(len*width);
	},function(){
		var index = $(this).index();
		$(".category_item_box:eq("+index+")").css("display","none");
	})
	
	//为你推荐单品切换
	var dir_recommend = 0;

	function changeDir(dir) {
		if (dir == 0) {
			$(".img1 > img").attr("src", "images/icon/left_b_2.png");
			$(".img2 > img").attr("src", "images/icon/right_b_1.png");
		} else if (dir == 1) {
			$(".img1 > img").attr("src", "images/icon/left_b_1.png");
			$(".img2 > img").attr("src", "images/icon/right_b_1.png");
		} else {
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
			dir = dir % 3;
			changeDir(dir);
			$(".recommend .recommend_spec_list").animate({
				left: "-=1234px"
			}, 200);
		}
	});

	// 单品热门导航切换
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



	//内容单品切换
	$(".content_spec > li").hover(function() {
		var index = $(this).index();
		var This = $(this);
		$(this).find(".content_right,.content_left").css("display", "block");

		//点击左移动
		$(this).find(".content_left").hover(function() {
			$(this).attr("src", "images/icon/content_left_hover.png");

			var left = This.find(".content_spec_list").position().left;
			if (left / -296 > 0) { //这里是移动进来的判断，除了第一个都需要变化鼠标
				$(this).css("cursor", "pointer");
			} else {
				$(this).css("cursor", "default");
			}

			$(this).unbind('click').click(function() {
				left = This.find(".content_spec_list").position().left;

				if (!This.find(".content_spec_list").is(":animated") && left < 0) {
					This.find(".content_spec_list").animate({
						left: "+=296px"
					});

					//单品切换后，下面的圆圈也要跟着切换
					This.find(".content_page > li > span").removeClass("active");
					This.find(".content_page > li:eq(" + (left / -296 - 1) + ") > span").addClass("active");
				}

				//当点做第二个向左移动的时候，刚移动过去鼠标就要变化，所以是1
				left = $(".content_spec_list").position().left;
				if (left / -296 > 1) {
					$(this).css("cursor", "pointer");
				} else {
					$(this).css("cursor", "default");
				}

				return false;
			});

		}, function() {
			$(this).find(".content_left").attr("src", "images/icon/content_left.png");
		});
		//点击右移动
		$(this).find(".content_right").hover(function() {

			$(this).attr("src", "images/icon/content_right_hover.png");

			var left = This.find(".content_spec_list").position().left;
			if (left / -296 < 3) {
				$(this).css("cursor", "pointer");
			} else {
				$(this).css("cursor", "default");
			}

			$(this).unbind('click').click(function() {
				left = This.find(".content_spec_list").position().left;

				if (!This.find(".content_spec_list").is(":animated") && left > -888) {
					This.find(".content_spec_list").animate({
						left: "-=296px"
					});

					//单品切换后，下面的圆圈也要跟着切换
					This.find(".content_page > li > span").removeClass("active");
					This.find(".content_page > li:eq(" + (left / -296 + 1) + ") > span").addClass("active");
				}

				//点击倒数第二个切换后，马上变化鼠标所以是2
				if (left / -296 < 2) {
					$(this).css("cursor", "pointer");
				} else {
					$(this).css("cursor", "default");
				}
				return false;
			});
		}, function() {
			$(this).attr("src", "images/icon/content_right.png");
			return false;
		});
		return false;
	}, function() {
		$(this).find(".content_right,.content_left").css("display", "none");
	});

	//内容content栏单品下面圆圈切换
	$(".content_page > li > span").hover(function() {
		$(this).click(function() {
			var root = $(this).parent().parent().parent();
			var This = $(this);
			var index = $(this).parent().index();
			var Left = -index * 296;
			if (!root.find(".content_spec_list").is(":animated")) {
				root.find(".content_page > li > span").removeClass("active");
				This.addClass("active");
				root.find(".content_spec_list").animate({
					left: "" + Left + "px"
				});
			}
		});
	});


});