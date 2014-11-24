/*

*/
<!DOCTYPE html>
<html>
<head>
    <title>:has(selector)过滤选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <div>改变包含"label"元素的背景色：</div>
    <ol>
        <li><p>我是P先生</p></li>
        <li><label>L妹纸就是我</label></li>
        <li><p>我也是P先生</p></li>
        <li><label>我也是L妹纸哦</label></li>
        <li><p>P先生就是我哦</p></li>
    </ol>
</body>
<script type="text/javascript">
    $("li:has('label')").css("background-color", "blue");
</script>
</html>
