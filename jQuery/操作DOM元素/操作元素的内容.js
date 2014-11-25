/*
使用html()和text()方法操作元素的内容
两个都是获取元素的内容
html()连格式也一起获取
text()只获取文本
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>操作元素内容</title>
   <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>html()和text()方法设置元素内容</h3>
    <div id="html"></div>
    <div id="text"></div>
    <script type="text/javascript">
        var $content = "<b>唉，我又变胖了！</b>";
        $("#html").html($content);
        $("#text").text($content);
    </script>
</body>
</html>

/*
运行结果:
html()和text()方法设置元素内容
唉，我又变胖了！(这是斜体的)
<b>唉，我又变胖了！</b>
*/
