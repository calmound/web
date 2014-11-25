/*
$(selector).replaceWith(content)
$(content).replaceAll(selector)
selector为被替换的元素
content为替换的内容
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>使用替换元素和内容</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>使用replaceAll()方法替换元素内容</h3>
    <span class="green" title="hi">我是屌丝</span>
    <script type="text/javascript">
        var $html = "<span class='red' title='hi'>我是土豪</span>";
        $($html).replaceAll(".green");
    </script>
</body>
</html>
