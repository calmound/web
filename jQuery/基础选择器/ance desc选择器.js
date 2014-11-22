/*
常常是多个元素嵌套在一起，形成复杂的层次关系，通过层次选择器，可以快速定位某一层次的一个或多个元素，ance desc选择器就是其中之一
调用格式：$("ance desc")
ance父辈 desc是ance的子孙辈
*/
<!DOCTYPE html>
<html>
<head>
    <title>ance desc选择器</title>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <div>码农家族
        <p>
           <label></label>
        </p>
        <label></label>
    </div>
</body>
<script type="text/javascript">
    $("div label").css("background-color","blue");
</script>
</html>
/*
div下的所有label都被染色了
*/