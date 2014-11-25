/*
trigger()方法可以直接手动触发元素指定的事件，这些事可以是元素自带事件
         也可以是自定义的事件
$(selector).trigger(event)
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>trigger()手动触发事件</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>trigger()手动触发事件</h3>
    <div>土豪，咱们交个朋友吧</div>
    <script type="text/javascript">
        $(function () {
            $("div").bind("change-color", function () {
                $(this).addClass("color");
            });
            $("div").trigger ("change-color");
        });
    </script>
</body>
</html>
