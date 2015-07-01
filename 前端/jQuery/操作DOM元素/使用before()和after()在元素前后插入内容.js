/*
before()在元素前面插入内容
after()在元素后面插入内容
格式：
$(selector).before(content)
$(selector).after(content)
content表示插入的内容，该内容可是元素或HTML字符窜

*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>在元素前后插入内容</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>after()方法在元素之后插入内容</h3>
    <span class="green">我们交个朋友吧！</span>
    <script type="text/javascript">
        var $html = "<span class='red'>兄弟。</span>"
        $(".green").after($html);
    </script>
</body>
</html>
