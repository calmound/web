/*

*/
<!DOCTYPE html>
<html>
<head>
    <title>:first-child子元素过滤选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>改变每个"蔬菜水果"中第一行的背景色</h3>
    <ol>
        <li>芹菜</li>
        <li>茄子</li>
        <li>萝卜</li>
        <li>大白菜</li>
        <li>西红柿</li>
    </ol>
    <ol>
        <li>橘子</li>
        <li>香蕉</li>
        <li>葡萄</li>
        <li>苹果</li>
        <li>西瓜</li>
    </ol>
</body>
<script type="text/javascript">
    $("li:first-child").css("background-color", "green");
</script>
</html>
