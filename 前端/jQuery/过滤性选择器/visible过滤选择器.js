/*

*/
<!DOCTYPE html>
<html>
<head>
    <title>:visible过滤选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>修改可见“水果”的背景色</h3>
    <ul>
        <li style="display:none">橘子</li>
        <li style="display:block">香蕉</li>
        <li style="display:">葡萄</li>
        <li>苹果</li>
        <li style="display:none">西瓜</li>
    </ul>
</body>
<script type="text/javascript">
    $("li:visible").css("background-color","blue");
</script>
</html>
