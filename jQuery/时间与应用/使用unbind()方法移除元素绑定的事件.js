/*
unbind()方法可以移除元素已绑定的事件
$(selector).unbind(event,fun)
其中参数event表示需要移除的事件名称，多个事件名用空格隔开
fun参数为事件执行时调用的函数名称
event表示需要移除的事件名称，多个事件用空格隔开
fun参数为事件执行时调用的函数名称
*/

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>unbind()移除绑定的事件</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>unbind()移除绑定的事件</h3>
    <input id="btntest" type="button" value="移除事件" />
    <div>土豪，咱们交个朋友吧</div>
    <script type="text/javascript">
        $(function () {
            $("div").bind("click",
            function () {
                $(this).removeClass("backcolor").addClass("color");
            }).bind("dblclick", function () {
                $(this).removeClass("color").addClass("backcolor");
            })

            $("#btntest").bind("click", function () {
                $("div").unbind("click dblclick");
               $(this).attr("disabled", "true");
            });
        });
    </script>
</body>
</html>
