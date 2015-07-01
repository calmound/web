/*
substr()方法从字符窜中提取从startPos位置开始的指定书目的字符窜
stringObject.substr(startPos,length)
startPos 要提取的子窜的起始位置
length提取字符窜的长度
注：若startPos为负数，则从最后一个字符算起
*/
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<script type="text/javascript">
var mystr="Hello World!";
document.write(mystr.substr(6)+ "<br />");
document.write(mystr.substr(0,5)               );
</script>
</head>
<body>
</body>
</html>
/*
运行结果：
world!
Hello
*/

