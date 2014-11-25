/*
read()时间类似于onLoad()事件，但前者只要页面的DOm结构加载后便出发
后者必须在二面全部元素加载成功才出发
read()可以写多个，按顺序执行
$(document).ready(function(){})====$(function(){})
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>ready()事件</title>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>页面载入时触发ready()事件</h3>
    <div id="tip"></div>
    <input id="btntest" type="button" value="点下我" />
    <script type="text/javascript">
        $(function() {
            $("#btntest").bind("click", function () {
                $("#tip").html("我被点击了！");
            });
        });
    </script>
</body>
</html>
