/*
调用格式：$("*")
获取页面中的全部元素
*/
<!DOCTYPE html>
<html>
<head>
    <title>*选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <form action="#">
    <input id="Button1" type="button" value="button" />
    <input id="Text1" type="text" />
    <input id="Radio1" type="radio" />
    <input id="Checkbox1" type="checkbox" />
    </form>
</body>
<script type="text/javascript">
    $("form *").attr("disabled", "true");
</script>
</html>
