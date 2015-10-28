<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
   <form action="/tt31/CategorySer" method="post">
       类别名称:<input type="text" name="ctype" /><br/>
       是否热点:<input type="checkbox" name="chot" value='true'/><br/>
       <input type="submit" value="提交" />
       <input type="hidden" name="status" value="saveCategory" />
   </form>
</body>
</html>