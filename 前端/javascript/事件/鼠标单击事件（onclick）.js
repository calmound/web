//当鼠标点击"确定"按钮后，调用openwin()函数。
<!DOCTYPE HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>单击事件 </title>
<script type="text/javascript">
  function openwin(){
     window.open('http://www.imooc.com','_blank','height=600,width=400,top=100,toolbar=no,left=0,menubar=no,scrollbars=no,status=no');}
</script>
</head>
<body>
  <form>
    <input name="点击我" type="button" value="点击我" onclick="openwin()"/>
  </form>
</body>
</html>
