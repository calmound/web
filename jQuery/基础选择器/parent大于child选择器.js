/*
$("parent>child")
child获取的元素师parent选择器的子元素
*/
<!DOCTYPE html>
<html>
<head>
    <title>parent > child选择器</title>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>

</head>
<body>
    <div>
        码农家族
        <p>
            <label></label>
        </p>
        <label></label>
        <label></label>
    </div>
    <label></label>
</body>
<script type="text/javascript">
    $("div label").css("border", "solid 5px red");
</script>
</html>
/*
仅仅改变了div的子辈label，而孙辈并没有变化
*/