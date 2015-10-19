window.onload = function(){
	var box = document.getElementById("container");
	
	var imgs = box.getElementsByTagName("img");
	var imgWidth = imgs[0].offsetWidth;
	
	var exposeWidth = 160 ;
	
	var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
	box.style.width = boxWidth + 'px';

	//设置每道门的初始位置
	function setImgsPos(){
		for(var i = 1 ;i<imgs.length;i++){
			imgs[i].style.left = imgWidth + exposeWidth * (i -1) +'px'
		}
	}
	setImgsPos();

	var translate = imgWidth - exposeWidth;

	for(var i=0;i<imgs.length;i++){
		imgs[i].index = i;
		imgs[i].onmouseover = function(){
			setImgsPos();
			for(var j = 1;j<= this.index;j++){
				imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate +'px';
			}
		}
	}
};