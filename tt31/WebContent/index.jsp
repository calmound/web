<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>

<body>
    <c:choose>
       <c:when test="${sessionScope.users==null}">
                                      您目前是游客，请<a href="/tt31/ulogin.jsp">登录</a>
       </c:when>
       <c:otherwise>
                                    您好${sessionScope.users.ulogin},<a href=" ">退出</a>
       </c:otherwise>
    </c:choose>
	<c:forEach items="${applicationScope.bigList}" var="list">
		<table width="625" height="190" border="1" cellpadding="0" cellspacing="0">
			<tr>
				<td height="23" colspan="4">
					<!--这里显示类别名--> 
					${list[0].category.ctype}
				</td>
			</tr>
			<tr>
				<!--循环4次 -->
				<c:forEach items="${list}" var="goods">
					<td width="184" height="165" valign="top">
					<table width="100%" height="164" border="0" 
					   cellpadding="0" cellspacing="0">
							<tr>
								<td height="113">
									<!--这里显示图片-->
									 <img src="/tt31/image/${goods.gpic}" />
								</td>
							</tr>
							<tr>
								<td height="25">
								   ${goods.gname }
									<!--价格-->
									${goods.gprice}
								</td>
							</tr>
							<tr>
								<td height="26"><!--名称--> 
								    ${goods.gname}
								     <c:url value="/detail.jsp"	var="detail">
										<c:param name="gid" value="${goods.gid}"/>
										<c:param name="gname" value="${goods.gname}" />
										<c:param name="gprice" value="${goods.gprice}" />
										<c:param name="gpic" value="${goods.gpic}" />
										<c:param name="ctype" value="${goods.category.ctype}" />
									</c:url>
									 <a href="${detail}">详细</a>
								</td>
							</tr>
						</table>
					</td>
				</c:forEach>
				<!-- 上面循环4次 -->
			</tr>
		</table>
	</c:forEach>
	<!-- 循环3次 -->
</body>
</html>