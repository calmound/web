/*
clone()方法可以复制一个备选元素，包含它的节点，文本和属性
格式：$(selector).clone()
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>使用clone()方法复制元素</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>使用clone()方法复制元素</h3>
    <span class="red" title="hi">我是美猴王</span>
    <script type="text/javascript">
        var $html = "<span class='red' title='hi'>我是美猴王</span>";
        $("body").append($(".red").clone());
    </script>
</body>
</html>
