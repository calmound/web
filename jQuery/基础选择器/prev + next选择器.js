/*
$("prev+next")
查找与“prev”元素紧邻的下一个“next”元素
*/
<!DOCTYPE html>
<html>
<head>
    <title>prev + next选择器</title>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>

</head>
<body>
    <div>
        码农家族
        <label></label>
        <p></p>
        <label></label>
        <label></label>
    </div>
    <label></label>
</body>
<script type="text/javascript">
    $("p+label").css("background-color","red");
</script>
</html>
/*
p的紧邻的label背景发生了变化
*/