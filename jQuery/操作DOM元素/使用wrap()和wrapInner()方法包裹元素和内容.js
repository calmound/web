/*
wrap()用于包裹元素的本身
wrapInner()包裹元素的内容
$(selector).wrap(wrapper)
$(selector).wrapInner(wrapper)
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>包裹元素和内容</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>    
</head>
<body>
    <h3>使用wrapInner()方法包裹元素</h3>
    <span class="red" title='hi'>我的身体有点歪</span>
    <script type="text/javascript">
        $(".red").wrapInner("<i></i>");
    </script>
</body>
</html>
