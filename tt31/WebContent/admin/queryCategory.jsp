<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
    <form action="/tt31/CategorySer" method="post">
       	查询:<input type="text" name="ctype" /><br/>
       	<input type="submit" value="提交" />
       	<input type="hidden" value="queryCategory" name="status" />
    </form>
    <c:if test="${requestScope.categorys!=null}">
    	<table>
    		<tr>
       			<td>编号</td>
       			<td>类别名</td>
       			<td>是否热点</td>
       			<td>所属客服</td>
       		<tr>
       		<c:forEach items="${requestScope.categorys}" var="category" varStatus="num">
       		     <tr>
       		        <td>${num.count}</td>
       		        <td>${category.ctype}</td>
       		           <td>
       		           <c:choose>
       		               <c:when test="${category.chot=='true'}">
       		                   <input type="checkbox" checked="checked" value="true" disabled="disable"/>
       		               </c:when>
       		               <c:otherwise>
       		                   <input type="checkbox" value="true" disabled="disable"/>
       		               </c:otherwise>
       		           </c:choose>
       		           </td>
       		     	<td>${category.account.alogin}</td>
       		     </tr>
       		</c:forEach>
    	</table>
    </c:if>
</html>