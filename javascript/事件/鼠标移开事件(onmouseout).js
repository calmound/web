//当鼠标移开"点击我"的按钮时，调用message()函数，弹出消息对话框。
<!DOCTYPE HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>鼠标移开事件 </title>
<script type="text/javascript">
  function message(){
    alert("不要移开，点击后进行慕课网!"); }
</script>
</head>
<body>
<form>
  <a href="http://www.imooc.com" onmouseout="message()">点击我</a>
</form>
</body>
</html>
