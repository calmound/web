/*

*/
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>:input表单选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>修改全部表单元素的背景色</h3>
    <form id="frmTest" action="#">
    <input type="button" value="Input Button" /><br />
    <select>
        <option>Option</option>
    </select><br />
    <textarea rows="3" cols="8"></textarea><br />
    <button>
        Button</button><br />
    </form>
</body>
<script type="text/javascript">
    $("#frmTest :input").addClass("bg_blue");
</script>
</html>