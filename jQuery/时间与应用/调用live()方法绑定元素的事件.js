/*
live()方法与可以绑定的可执行事件，还可以绑定动态元素
$(selector).live(event,[data],fun)
data为触发事件时执行的函数
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>live()方法绑定事件</title>
    <script src="http://libs.baidu.com/jquery/1.8.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>live()方法绑多个事件</h3>
    <script type="text/javascript">
        $(function () {
            $("#btntest").live("click mouseout", function () {
                $(this).attr("disabled", "true");
            })
            $("body").append("<input id='btntest' type='button' value='点击或移出就不可用了' />");
        });
    </script>
</body>

</html>
