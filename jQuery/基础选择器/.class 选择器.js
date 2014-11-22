/*
调用格式$(".class")
  .class参数表示元素的CSS类别(类选择器)名称
*/
<!DOCTYPE html>
<html>
<head>
    <title>.class选择器</title>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <div class="red">立正，向我这边看齐</div>
    <div class="green">我先歇歇脚</div>
</body>
<script type="text/javascript">
    var $redHTML = $(".red").html();
    $(".green").html($redHTML);
</script>
</html>
/*
运行结果：
  立正，向我这边看齐
  立正，向我这边看齐
*/