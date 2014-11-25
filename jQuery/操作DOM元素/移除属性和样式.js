/*
removeAttr(name)参数表示移除的属性名
removeClass(class)参数表示移除的样式名
*/

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>移除元素样式</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>removeClass()方法移除元素样式</h3>
    <div id="content" class="blue white">我脱下了一件蓝色外衣</div>
	<script type="text/javascript">
        $("#content").removeClass("blue white");
    </script>
</body>
</html>

