/*
hover()方法的功能是当鼠标移到所选元素上时，执行方法中的第一个函数
       鼠标移出时，执行方法中的第二个函数
$(selector).hover(over,out);
over参数移到所选元素上触发的函数,out参数为移出元素时触发的函数
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>hover()方法切换事件</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>hover()方法切换事件</h3>
    <div>别走！你就是土豪</div>
    <script type="text/javascript">
        $(function () {
            $("div").hover(
            function () {
                $(this).addClass("orange");
            },
            function () {
                $(this).removeClass("orange")
            })
        });
    </script>
</body>
</html>
