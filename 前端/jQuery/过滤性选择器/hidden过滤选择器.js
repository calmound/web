/*

*/
<!DOCTYPE html>
<html>
<head>
    <title>:hidden过滤选择器</title>
        <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>显示隐藏元素的内容</h3>
    <input id="hidstr" type="hidden" value="我已隐藏起来"/>
    <div></div>
</body>
<script type="text/javascript">
    var $strHTML = $("input:hidden").val();
    $("div").html($strHTML);
</script>
</html>
