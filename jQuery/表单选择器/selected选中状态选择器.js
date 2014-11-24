/**/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>:selected选中状态选择器</title>
   <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>获取处于选中状态元素的内容</h3>
    <form id="frmTest" action="#">
    <select id="Select1" multiple="multiple">
        <option value="0">苹果</option>
        <option value="1" selected="selected">桔子</option>
        <option value="2">荔枝</option>
        <option value="3" selected="selected">葡萄</option>
        <option value="4">香蕉</option>
    </select><br /><br />
    <div id="tip"></div>
    </form>
</body>
<script type="text/javascript">
    var $txtOpt = $("#frmTest :selected").text();
    $("#tip").html("选中内容为:" + $txtOpt);
</script>
</html>
