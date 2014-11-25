/*
当一个元素的值发生变化时，将会触发change事件，例如在选择下拉列表框中的选项时，就会触发change事件
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>下拉列表的change事件</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>下拉列表的change事件</h3>
    <select id="seltest">
        <option value="葡萄">葡萄</option>
        <option value="苹果">苹果</option>
        <option value="荔枝">荔枝</option>
        <option value="香焦">香焦</option>
    </select>
    <script type="text/javascript">
        $(function () {
            $("select").bind("change", function () {
                if ($(this).val() == "苹果")
                    $(this).css("background-color", "red");
                else
                    $(this).css("background-color", "green");
            })
        });
    </script>
</body>
</html>
