/*
append(content)方法的功能是向指定的元素中追加内容，被追加的content参数
                可以是字符，HTML元素标记，还可以是一个返回字符窜内容的函数
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>append()方法追加内容</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>append()方法追加内容</h3>
    <script type="text/javascript">
        function rethtml() {
            var $html = "<div id='test' title='hi'>我是调用函数创建的</div>"
            return $html;
        }
        $("body").append(rethtml);
    </script>
</body>
</html>
