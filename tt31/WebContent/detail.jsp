<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
   商品名:${param.gname}
   <br/>
   商品价格:${param.gprice}
   <br/>
   所属类别:${param.ctype}
   <br/>
   <img alt="" src="tt31/image/${param.gpic}">
   <br/>
   <input type="button" value="购买" />
</body>
</html>