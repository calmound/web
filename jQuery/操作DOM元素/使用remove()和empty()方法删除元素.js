/*
remove()方法删除所选元素本身和子元素，可以通过添加过滤参数指定需要删除的某些元素
empty()只删除所选元素的子元素
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>删除元素</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>    
</head>
<body>
    <h3>使用empty()方法删除元素</h3>
    <span class="green">香蕉</span>
    <span class="green">桃子</span>
    <span class="green">葡萄</span>
    <span class="green">荔枝</span>
    <script type="text/javascript">
        $("span").empty();
    </script>
</body>
</html>
