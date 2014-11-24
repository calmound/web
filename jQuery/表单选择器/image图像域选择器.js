/**/
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>:image表单选择器</title>
   <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>

</head>
<body>
    <h3>修改表单中图像元素的背景色</h3>
    <form id="frmTest" action="#">
    <input type="image" src="http://img.mukewang.com/52b284ea00016b2902590070.jpg" /><br />
    <br />
    <img alt="" src="http://img.mukewang.com/52b284ea00016b2902590070.jpg" /><br />
    </form>
</body>
<script type="text/javascript">
    $("#frmTest :image").addClass("bg_red");
</script>
</html>
