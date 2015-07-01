/*

*/
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>:checkbox表单选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>将表单的全部复选框设为不可用</h3>
    <form id="frmTest" action="#">
    <input type="button" value="Input Button" /><br />
    <input id="Checkbox1" type="checkbox" />
    <label for="Checkbox1">
        西红柿</label><br />
    <input id="Checkbox2" type="checkbox" />
    <label for="Checkbox2">
        茄子</label><br />
    <input id="Checkbox3" type="checkbox" />
    <label for="Checkbox3">
        黄瓜</label><br />
    <button>
        Button</button><br />
    </form>
</body>
<script type="text/javascript">
    $("#frmTest :checkbox").attr("disabled","true");
</script>
</html>
