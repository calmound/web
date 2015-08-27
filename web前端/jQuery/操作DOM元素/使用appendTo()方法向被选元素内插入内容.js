/*
appendTo()方法可以向指定的元素内插入内容
格式：$(content).appendTo(selector)
content表示需要插入的内容，slelector表示被选的元素
即把content内容插入selector元素内，默认在尾部
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>appendTo()方法插入内容</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>appendTo()方法插入内容</h3>
    <div>
        <span class="green">小乌龟</span>
    </div>
    <script type="text/javascript">
        var $html = "<span class='red'>小青蛙</span>"
        $($html).appendTo("div");
    </script>
</body>
</html>
