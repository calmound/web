/*
*/
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>:password表单选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>

</head>
<body>
    <h3>修改多个密码输入框元素的背景色</h3>
    <form id="frmTest" action="#">
    <input type="text" id="Text1" value="单行文本输入框"/><br />
    <input type="password" id="Text2" value="密码文本输入框"/><br />
    <textarea rows="3" cols="8">区域文本输入框</textarea><br />
    <input type="password" id="Text3" value="密码文本输入框"/><br />
    <button>
        Button</button><br />
    </form>
</body>
<script type="text/javascript">
    $("#frmTest :password").addClass("bg_red");
</script>
</html>
