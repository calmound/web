<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
              用户登录页面
    <form action="/tt31/UsersSer" method="post">
      	登录名:<input type="text" name="ulogin" /><br/>
      	密码:<input type="password" name="upass" /><br/>
      	${error}<br/>
      	<input type="submit" value="提交 " />
      	<input type="hidden" name="status" value="login" />
    </form>
</body>
</html>