/**/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>:button表单选择器</title>
   <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>修改表单中按钮元素的背景色</h3>
    <form id="frmTest" action="#">
    <input id="Button1" type="button" value="我是普通按钮" /><br />
    <input id="Submit1" type="submit" value="点我就提交" /><br />
    <button>
        我也是普通按钮</button><br />
    </form>
</body>
<script type="text/javascript">
    $("#frmTest :button").addClass("bg_blue");
</script>
</html>
