<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
<title>Insert title here</title>
</head>
<body>
	<s:form action="UserLogin">
		<table border="0" cellspacing="2" cellpadding="2" width="22%">
			<tr>
				<s:textfield name="username" lable="用户"></s:textfield>
			<tr>
			<tr>
				<s:password name="password" lable="密码"></s:password>
			</tr>
			<tr>
				<td colspan="2">
					<s:submit name="submit" theme="simple"></s:submit>
					<s:reset value="重置" theme="simple"></s:reset>
				</td>
			<tr>
		</table>
	</s:form>
</body>
</html>