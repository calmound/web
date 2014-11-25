/*
bind()绑定前需要知道被绑定的元素名，绑定的事件名称，实践中执行函数内容
$(selectior).bind(event,[data]function)
参数event为事件名称，多个事件名称用空格隔开,function为事件执行的函数
*/

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>bind()方法绑定事件</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>bind()方法绑多个事件</h3>
    <input id="btntest" type="button" value="点击或移出就不可用了" />
    <script type="text/javascript">
        $(function () {
            $("#btntest").bind("click mouseout", function () {
                $(this).attr("disabled", "true");
            })
        });
    </script>
</body>
</html>
