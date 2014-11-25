/*
addClass() 括号中的参数为增加元素的样式名称
css() 直接将样式的属性内容写在括号中
*/

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>操作元素样式</title>
    <style>
	   .blue{
	      color:blue;
	   }
	</style>
</head>
<body>
    <h3>css()方法设置元素样式</h3>
    <div id="content">我穿了一件红色外衣</div>
    <script type="text/javascript">
        $("#content").css("background","red");
		$("#content").addClass(blue);
    </script>
</body>
</html>

