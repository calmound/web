/*

*/
<!DOCTYPE html>
<html>
<head>
    <title>[attribute!=value]属性选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>改变"title"属性值不为"蔬菜"的背景色</h3>
    <ul>
        <li title="蔬菜">茄子</li>
        <li title="水果">香蕉</li>
        <li title="蔬菜">芹菜</li>
        <li title="水果">苹果</li>
        <li title="水果">西瓜</li>
    </ul>
</body>
<script type="text/javascript">
    $("li[title!='蔬菜']").css("background-color", "green");
</script>
</html>
