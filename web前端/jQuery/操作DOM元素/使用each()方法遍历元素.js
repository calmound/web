/*
each()方法可以遍历指定的元素集合，在遍历时，通过回调函数返回遍历元素的序列号
$(selector).each(function(index))
index为遍历元素的序列号
*/

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>使用each()方法遍历元素</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>使用each()方法遍历元素</h3>
    <span class="green">香蕉</span>
    <span class="green">桃子</span>
    <span class="green">葡萄</span>
    <span class="green">荔枝</span>
    <script type="text/javascript">
        $("span").each(function (index) {
            if (index == 1) {
                $(this).attr("class", "red");
            }
        });
    </script>
</body>
</html>
