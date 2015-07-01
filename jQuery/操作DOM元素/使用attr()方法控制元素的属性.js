/*
attr()的作用是设置或返回元素的属性
attr(属性名)是获取元素属性名的值
attr(属性值,属性名)设置属性名的值
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>操作元素属性</title>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>attr()方法设置元素属性</h3>
    <a href="http://127.0.0.1" id="a1">点我就变</a>
    <div>我改变后的地址是：<span id="tip"></span></div>
    <script type="text/javascript">
        $("#a1").attr("href","http://www.google.com");
        var $url = $("#a1").attr("href");
        $("#tip").html($url);
    </script>
</body>
</html>

/*
运行结果：
点我就变
我改变后的地址是：http://www.google.com
*/