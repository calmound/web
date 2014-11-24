<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
/**
/

<head>
    <title>:checked选中状态选择器</title>
   <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>将处于选中状态的元素设为不可用</h3>
    <form id="frmTest" action="#">
    <input id="Radio1" type="radio" checked="checked" />
    <label id="Label1" for="Radio1">
        苹果</label><br />
    <input id="Radio2" type="radio" />
    <label id="Label2" for="Radio2">
        桔子</label><br />
    <input id="Checkbox1" type="checkbox" checked="checked" />
    <label id="Label3" for="Checkbox1">
        荔枝</label><br />
    <input id="Checkbox2" type="checkbox" />
    <label id="Label4" for="Checkbox2">
        葡萄</label><br />
    <input id="Checkbox3" type="checkbox" checked="checked" />
    <label id="Label5" for="Checkbox3">
        香蕉</label><br />
    </form>
</body>
<script type="text/javascript">
    $("#frmTest :checked").attr("disabled", "true");
</script>
</html>
