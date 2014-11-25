/*
toggle()方法可以在元素的click事件中绑定两个或两个以上的函数
同时，它还可以实现元素的隐藏与显示的切换
$(selector).toggle(fun1().fun2(),funN(),...)
*/

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>toggle()方法绑定多个函数</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>toggle()方法绑定多个函数</h3>
    <input id="btntest" type="button" value="点一下我" />
    <div>我是动态显示的</div>
    <script type="text/javascript">
        $(function () {
            $("#btntest").bind("click",                       function () {
                $("div").toggle(
                 function(){
                $(this).attr("display"        ,"none");
                 },
                 function(){
                     $(this).removeAttr("display");
                 })            
            })
        });
    </script>
</body>
</html>
