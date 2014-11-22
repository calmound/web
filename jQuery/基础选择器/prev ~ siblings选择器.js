/*
$("prev~siblings")
获取prev 元素后面全部相邻的元素
*/
<!DOCTYPE html>
<html>
<head>
    <title>prev ~ siblings选择器</title>
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
    $("p~label").css("border", "solid 1px red");
    $("p~label").html("我们都是p先生的粉丝");
</script>
</html>
/*
p之后的label都被改变了
*/