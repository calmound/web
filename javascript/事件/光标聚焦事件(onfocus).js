//当下拉列表得到焦点时，调用message()函数，就弹出对话框“"请选择，您现在的职业！”。
<!DOCTYPE HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title> 光标聚焦事件 </title>
  <script type="text/javascript">
    function message(){
	  alert("请选择，您现在的职业！");
	}
  </script>
</head>
<body>
请选择您的职业：<br>
  <form >
    <select name="career" onfocus="message()"> 
      <option>学生</option> 
      <option>教师</option> 
      <option>工程师</option> 
      <option>演员</option> 
      <option>会计</option> 
    </select> 
  </form>
</body>
</html>
