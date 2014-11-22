/*
调用格式：$("sele1,sele2，seleN")
表示精确的选择任意多个指定的元素
*/
<!DOCTYPE html>
<html>
<head>
    <title>sele1,sele2,seleN选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <div class="red">选我吧！我是red</div>
    <div class="green">选我吧！我是green</div>
    <div class="blue">选我吧！我是blue</div>
</body>
<script type="text/javascript">
    $(".red,.green").html("hi,我们的样子很美哦!");
</script>
</html>
/*
hi,我们的样子很美哦!
hi,我们的样子很美哦!
选我吧！我是blue
*/