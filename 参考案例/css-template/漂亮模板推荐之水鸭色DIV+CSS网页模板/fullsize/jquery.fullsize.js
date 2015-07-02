 /*
 * Fullsize
 * Copyright 2009 Drew Wilson
 * www.drewwilson.com
 * www.addfullsize.com
 *
 * Version 1.1.1   -   Updated: Jul. 2, 2009
 *
 * Fullsize is an attempt to standardize the way in page 'image popups' work.
 * It seems there are hundreds of javascripts light boxes, modal boxes, image zooms, image popups, etc.
 * But none of them provide a way to signal the user that what they just clicked on, is an
 * in page pop-up of a larger version (or 'fullsize' version) of the image they just clicked.
 * Fullsize is an attempt to do just that, provide a 'standard' way for users to recognize an in page pop-up.
 *
 * My intention is to get a 'fullsize' attribute added to the <IMG> element in the next version of HTML.
 * This would allow browsers to do an in page pop-up of the 'fullsize' image natively.
 * 
 * In page pop ups are here to stay... so lets standardize them.
 *
 * Check out www.addfullsize.com for more info and to show your support for Fullsize.
 *
 * This jQuery plug-in is my atempt to bring the idea of 'fullsize' into a reality.
 * Though my intention is to push this functionality to the browser itself and not rely on JavaScript libraries,
 * for now, this will have to do :)
 *
 * This Fullsize jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($){

	$.fn.fullsize = function(options) {

		var defaults = {  
		  	shadow: true,  
		  	zoomInSpeed: 200,  
		  	zoomOutSpeed: 200,
		  	fadeInSpeed: 250,  
		  	fadeOutSpeed: 250,
		  	leftOffset: 0,
		  	topOffset: 0,
		  	iconOffset: 8,
		  	forceTitleBar: false,
		  	extraTrigger: false,
		  	parentSteps: 0,
		  	destroy: false,
		  	start: function(){},
		  	end: function(){}
	  	};  
	 	var opts = $.extend(defaults, options);
	 	
	 	// Remove all Fullsize Icons on destroy request
	 	if(opts.destroy == true){
	 		$("div.fullsize-icon").remove();
	 	}

	 	// If ESC key pressed, close Fullsize
	 	$(document).keydown(function(event){
	 		if(event.keyCode == 27){
	 			$("div.fullsize-wrapper, div.fullsize-sh-wrap").fadeOut(opts.fadeOutSpeed, function(){
	 				$(this).remove();
	 			});
	 			opts.end.call(this);
	 		}
	 	});
		
		return this.each(function(){
			
			// Remove all Fullsize bound events
			if(opts.destroy == true){
				$(this).unbind();
			} else {
			
				// Check to make sure there is a 'longdesc' attribute before we add Fullsize to the Element.
				if($(this).attr("longdesc")) {
			
					// Declare the current Image as a variable, and gather some of it's properties.
					var org_image = $(this);	
					var img_title = org_image.attr("title");
					var img_src = org_image.attr("longdesc");
					
					// Setup the Fullsize Icon 
					var icon = $("<div></div>").addClass("fullsize-icon").css({"display":"none"});
					
					// Move up Parents until the spcified limit has been met, then find the additional specified Selector
					var addTrigger;
					if(opts.extraTrigger){
						var theParent = org_image;
						for (var i=0; i <= opts.parentSteps; i++){
							theParent = theParent.parent();
						}
						addTrigger = theParent.find(opts.extraTrigger);
					}
									
					org_image.add(addTrigger).hover(function(){
					
						// If the Original Image is contained inside of an Element that has a 'overflow' set to 'hidden',
						// and the Original Image has a negitive 'margin-top', this will make the Offest values be set to the 
						// Element with the 'overflow:hidden' property, rather than the Original Image itself.
						// Otherwise the Fullsize icon would not show up in the correct position.
						var margin_top = org_image.css("marginTop").slice(0,-2);
						var margin_bottom = org_image.css("marginLeft").slice(0,-2);
						var margin_left = org_image.css("marginLeft").slice(0,-2);
						var margin_right = org_image.css("marginLeft").slice(0,-2);
						if (margin_top < 0 || margin_bottom < 0 || margin_left < 0 || margin_right < 0) {
							var parent_ele = $(org_image);
							var parentEls = $(org_image).parents();  
							 $(parentEls).each(function(){
								if(this.tagName == "BODY") {
									return false;
								} else if($(this).css("overflow") == "hidden") {
									parent_ele = $(this);
									return false;
								}
							});
							var offset = parent_ele.offset();
							var parent_border_top = parseInt(parent_ele.css("border-top-width"));
							var parent_border_left = parseInt(parent_ele.css("border-left-width"));
						} else {
							var offset = org_image.offset();
							var parent_border_top = parseInt(org_image.css("border-top-width"));
							var parent_border_left = parseInt(org_image.css("border-left-width"));
						}
						if (!parent_border_top){ parent_border_top = 0; }
						if (!parent_border_left){ parent_border_left = 0; }
												
						var displayFlag = false;
						$("div.fullsize-icon").each(function(){		
							if(parseInt($(this).css("top")) == (offset.top + opts.iconOffset + parent_border_top) && parseInt($(this).css("left")) == (offset.left + opts.iconOffset + parent_border_left)){
								displayFlag = true;
								curIcon = $(this);
							}
						});
						if(displayFlag == false){
							$(icon).css({"top":offset.top + opts.iconOffset + parent_border_top, "left":offset.left + opts.iconOffset + parent_border_left});
							$("body").prepend(icon);
						}
						$(icon).show();
					}, function(){
						$(icon).hide();
					});
					$(icon).hover(function(){
						$(this).show();
					}, function(){
						$(this).hide();
					});
					
					$(icon).click(function(){
						
						opts.start.call(this);
						
						// If a Fullsize Popup is currently active, we will remove it before creating a new one.	
						$("div.fullsize-wrapper, div.fullsize-sh-wrap").remove();
						
						// Gather window & scroll positions.
						var win_w = $(window).width();
						var win_h = $(window).height();
						var scrolltop = $(window).scrollTop();
						var scrollleft = $(window).scrollLeft();								

						// Setup the Loading DIV 
						if(!$.support.opacity && parseInt($.browser.version.substr(0,1)) < "8"){
							var loading_left = (((win_w - opts.leftOffset) / 2) + scrollleft) - 25;
							var loading_top = (((win_h - opts.topOffset) / 2) + scrolltop) - 25;
						} else {
							var loading_left = (((win_w + opts.leftOffset) / 2) + scrollleft) - 25;
							var loading_top = (((win_h + opts.topOffset) / 2) + scrolltop) - 25;
						}
						var full_loading = $("<div></div>").addClass('fullsize-loading').css({"margin-left":loading_left, "margin-top":loading_top});
						var full_loading_inner = $("<div></div>").addClass('fullsize-loading-inner');
						$(full_loading).prepend(full_loading_inner);
						$("body").prepend(full_loading);
						
						// Setup the Fullsize Image 				
						var full_img = new Image();
						$(full_img).load(function(){
							$(this).hide();
							
							// Determine how to position the Fullsize Image into the center of the page.
							var new_offset = org_image.offset();
							img_w = this.width;
							img_h = this.height;
					
							// If the Image is bigger than the window, shrink it to fit in the window.
							aspect = img_w / img_h;
							if (((img_w + opts.leftOffset) + 32) > win_w) {
								img_w = (win_w - opts.leftOffset) - 32;
								img_h = img_w / aspect;
							}
							if (((img_h + opts.topOffset) + 36) > win_h) {
								img_h = (win_h - opts.topOffset) - 36;
								img_w = img_h * aspect;
							}
							
							if(!$.support.opacity && parseInt($.browser.version.substr(0,1)) < "8"){
								var img_left = Math.round((((win_w - opts.leftOffset) - img_w) / 2) + scrollleft);
								var img_top = Math.round((((win_h - opts.topOffset) - img_h) / 2) + scrolltop);
							} else {
								var img_left = Math.round((((win_w + opts.leftOffset) - img_w) / 2) + scrollleft);
								var img_top = Math.round((((win_h + opts.topOffset) - img_h) / 2) + scrolltop);
							}
							if(img_left < 0) {
								img_left = 0;
							}
							if(img_top < 0) {
								img_top = 0;
							}	

							$(this).css({"height": org_image.height() + "px", "width":org_image.width() + "px"});
							$("div.fullsize-loading").remove();
							var full_wrap = $("<div></div>").addClass("fullsize-wrapper").css({"display":"none", "margin-top":new_offset.top, "margin-left":new_offset.left});						
							$(full_wrap).prepend(this);
							
							// If there is a 'Title' attribute on the Original Image, display the Title bar.				
							if(img_title != "" || opts.forceTitleBar == true) {
								var full_close = $("<a></a>").addClass("fullsize-close");
								var full_title = $("<div></div>").addClass("fullsize-title").css({"max-width":img_w});
								var full_title_text = $("<div></div>").addClass("fullsize-title-text").text(img_title);							
								$(full_title).prepend(full_close);
								$(full_title).prepend(full_title_text);
								$(full_wrap).prepend(full_title);
								$("body").prepend(full_wrap);
								if(img_top != 0) {
									img_top = img_top - 12;
								}	
							} else {
								$(this).addClass("fullsize-close");
								$("body").prepend(full_wrap);					
							}
	
							// Setup Shadows
							if (opts.shadow == true) {
								if ($.browser.safari || ($.browser.mozilla && $.browser.version.substr(0,5) >= "1.9.1")) {
									$(full_wrap).css({"-webkit-box-shadow":"0 2px 16px #000", "-moz-box-shadow":"0 2px 16px #000", "box-shadow":"0 2px 16px #000"});
								} else {
									var full_sh_wrap = $("<div></div>").addClass("fullsize-sh-wrap").css({"display":"none", "width": org_image.width(), "margin-top":new_offset.top, "margin-left":new_offset.left});
									var full_sh_top = $("<div></div>").addClass("fullsize-sh-top");
									var full_sh_top_left = $("<div></div>").addClass("fullsize-sh-top-l");
									var full_sh_top_middle = $("<div></div>").addClass("fullsize-sh-top-m");
									var full_sh_top_right = $("<div></div>").addClass("fullsize-sh-top-r");
									$(full_sh_top).append(full_sh_top_left).append(full_sh_top_right).append(full_sh_top_middle);
									$(full_sh_wrap).prepend(full_sh_top);
									var full_sh_body = $("<div></div>").addClass("fullsize-sh-body");
									var full_sh_body_r = $("<div></div>").addClass("fullsize-sh-body-r");
									$(full_sh_body).append(full_sh_body_r);
									$(full_sh_wrap).append(full_sh_body);
									var full_sh_bottom = $("<div></div>").addClass("fullsize-sh-bottom");
									var full_sh_bottom_left = $("<div></div>").addClass("fullsize-sh-bottom-l");
									var full_sh_bottom_middle = $("<div></div>").addClass("fullsize-sh-bottom-m");
									var full_sh_bottom_right = $("<div></div>").addClass("fullsize-sh-bottom-r");
									$(full_sh_bottom).append(full_sh_bottom_left).append(full_sh_bottom_right).append(full_sh_bottom_middle);
									$(full_sh_wrap).append(full_sh_bottom);
									$("body").prepend(full_sh_wrap);
								
									// Setup shadow Animations
									$(full_sh_body).animate({
										height: parseInt(full_wrap.height()) + img_h - 22			
									}, {queue:false, duration:opts.zoomInSpeed});
									$(full_sh_wrap).fadeIn(opts.fadeInSpeed).animate({
										height: parseInt(full_wrap.height()) + img_h + 22,
										width: img_w + 22,
										marginTop: img_top - 9,
										marginLeft: img_left - 11 				
									}, {queue:false, duration:opts.zoomInSpeed});
								}
							}

							// Setup Animations
							$(this).fadeIn(opts.fadeInSpeed).animate({
								height: img_h,
								width: img_w				
							}, {queue:false, duration:opts.zoomInSpeed});
							$(full_wrap).fadeIn(opts.fadeInSpeed).animate({
								width: img_w,
								marginTop: img_top,
								marginLeft: img_left			
							}, {queue:false, duration:opts.zoomInSpeed});					
			
							$(".fullsize-close").click(function(){
								closeFullsize(full_img, full_wrap, org_image, $(this));	
							});
									
						}).attr("src",img_src).addClass("fullsize-image");
					
			
					});
					
					// This function is purposely pulled out of the Image Load function.
					// By doing so the Fullsize Image will now find the exact loacation of the Original Image 
					// when you click the Close button. This way the Fullsize Image will always go back to it's
					// original position, even if you resize the window, and the Original Image changes it's position.
					function closeFullsize(full_img, full_wrap, org_image, ele) {
						var offsets = org_image.offset();
						$(full_img).fadeOut(opts.fadeOutSpeed).animate({
							height: org_image.height(),
							width: org_image.width()				
						}, {queue:false, duration:opts.zoomOutSpeed});
											
						if (opts.shadow == true) {
							$("div.fullsize-sh-wrap").remove();
						}
						
						$(full_wrap).fadeOut(opts.fadeOutSpeed).animate({
							width: org_image.width(),
							marginTop: offsets.top,
							marginLeft: offsets.left			
						}, {queue:false, duration:opts.zoomOutSpeed, complete: function(){ele.remove();}});
						
						opts.end.call(this);
					}
					
					
				}
			}		
		});
	}
})(jQuery);  