/*
slice() 方法可从已有的数组中返回选定的元素。
语法：arrayObject.slice(start.end);
start:必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起
end:可选。规定从何处结束选取。
*/
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Array对象 </title>
<script type="text/javascript">
   var myarr1= ["我","爱","你"];
   document.write(myarr1.slice(1));
</script>
</head>
<body>
</body>
</html>
/*
运行结果：爱你
*/