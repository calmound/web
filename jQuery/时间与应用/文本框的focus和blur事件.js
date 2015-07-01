/*
focus事件在元素获取焦点时触发，若点击文本框时触发该事件
而blur事件则在元素丢失焦点时触发，如点击除文本框的任何元素，都会触发该事件
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>表单中文本框的focus和blur事件</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>表单中文本框的focus和blur事件</h3>
    <input id="txtest" type="text" value="" />
    <div></div>
    <script type="text/javascript">
        $(function () {
            $("input")
            .bind("focus", function () {
                $("div").html("请输入您的姓名！");
            })
            $("input").bind("blur", function () {
                if ($(this).val().length == 0)
                    $("div").html("你的名称不能为空！");
            })
        });
    </script>
</body>
</html>
