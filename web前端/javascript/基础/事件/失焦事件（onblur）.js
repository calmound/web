//当光标从密码文本框离开时，触发onblur 事件，调用message()函数。
<!DOCTYPE HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title> 失焦事件 </title>
<script type="text/javascript">
  function message(){
    alert("请确定已输入密码后，在移开!"); }
</script>    
</head>
<body>
  <form>
   用户:<input name="username" type="text" value="请输入用户名！" >
   密码:<input name="password" type="text" value="请输入密码！" onblur="message()">
  </form>
</body>
</html>
