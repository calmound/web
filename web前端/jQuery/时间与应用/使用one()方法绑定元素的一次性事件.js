/*
one()方法可以绑定元素任何有效的事件，但这种方法绑定的事件只触发一次
$(selector).one(event,[data],fun)
data为触发事件时携带的数据
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>one()方法执行一次绑定事件</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>    
</head>
<body>
    <h3>one()方法执行一次绑定事件</h3>
    <div>请点击我一下</div>
    <script type="text/javascript">
        $(function () {
            var intI = 0;
           $("div").one("click", function () {
                intI++;
                $(this).css("font-size", intI + "px");
            })
        });
    </script>
</body>
</html>
