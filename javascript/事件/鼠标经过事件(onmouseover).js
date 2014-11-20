//当鼠标经过"确定"按钮后，调用message()函数，弹出消息对话框。
<!DOCTYPE HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title> 鼠标经过事件 </title>
<script type="text/javascript">
    function message(){
      confirm("请输入密码后，再单击确定!"); }
</script>
</head>
<body>
<form>
密码:<input name="password" type="password" >
<input name="确定" type="button" value="确定" onmouseover="message()"/>
</form>
</body>
</html>
