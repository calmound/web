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
             这里显示购物车；购买的商品
    <table>
       <tr>
          <td>商品名称</td>
          <td>商品价格</td>
          <td>商品数量</td>
          <td>数量</td>
       </tr>
       <c:forEach items="${sessionScope.forder.sorders}" var="sorder">
         <tr>
            <td>${sorder.sname}</td>
            <td>${sorder.sprice}</td>
            <td>${sorder.snumber}</td>
         </tr>
       </c:forEach>
    </table>
    <div>总价：</div>
</body>
</html>