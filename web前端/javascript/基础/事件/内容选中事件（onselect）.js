//当选中个人简介文本框中文字时，触发onselect事件，并弹出对话框。
<!DOCTYPE HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title> 内容选中事件 </title>
<script type="text/javascript">
  function message(){
    alert("您触发了选中事件！"); }
</script>    
</head>
<body>
  <form>
  个人简介：<br>
   <textarea name="summary" cols="60" rows="5" onselect="message(">请写入个人简介，不少于200字！</textarea>
  </form>
</body>
</html>
