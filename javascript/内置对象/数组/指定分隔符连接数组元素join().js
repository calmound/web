/*
 join()方法用于吧数组中的所有元素放入一个字符窜。元素师通过指定的分隔符进行分隔的
 语法：arrayObject.join(separator)
 separator:可选。指定要使用的分隔符。若省略，则使用逗号作为分隔符
 注：返回一个字符窜
*/
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Array对象 </title>
<script type="text/javascript">
    var myarr1= new Array("86","010")
    var myarr2= new Array("84697581");
   var myarr3= myarr1.concat(myarr2);
   document.write(myarr3.join("-"));
</script>
</head>
<body>
</body>
</html>
/*
运行结果
86-010-84697581
*/
