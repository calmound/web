<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
   <c:url value="/ForderSer" var="buy">
      <c:param name="status" value="buy" />
      <c:param name="gid" value="${param.gid}" />
      <c:param name="gname" value="${param.gname}" />
      <c:param name="gprice" value="${param.gprice}" />
   </c:url>
   <a href="${buy}">购买</a>
   </body>
</html>