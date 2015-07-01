/*

*/
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>:radio表单选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>将表单中单选按钮设为不可用</h3>
    <form id="frmTest" action="#">
    <input type="button" value="Input Button" /><br />
    <input id="Radio1" type="radio" />
    <label for="Radio1">
        男</label>
    <input id="Radio2" type="radio" />
    <label for="Radio2">
        女</label><br />
    <button>
        Button</button><br />
    </form>
</body>
<script type="text/javascript">
    $("#frmTest :radio").attr("disabled","true");
</script>
</html>
