<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>m购物网</title>
</head>
<body>
    <div id = "top">
       <h1>
           	商品添加页面
       </h1>
       <div id="form">
          <form action="/shopping/goods_saveGoods.action" method="post" enctype="multipart/form-data">
            <div id="infor">
              <div id="inputs2">
                 <span>商品名称:</span>
                 <span><input type="text> name="gname" id="gname" /></span>
                 <span id="gnameError">*</span>
              </div>
            </div>
            
            <div id="infor">
               <div id="inputs1">
                 <span>商品单价:</span>
                 <span><input type="text" name="gprice" id="gprice" /></span>
                 <span id="gpriceError">*</span>
               </div>
            </div>
            
            <div id="infor">
               <div id="inputs1">
                 <span>是否推荐</span>
                 <input type="radio" name="giscommend" value="true" />是
                 <input type="radio" name="giscommend" value="false" checked="checked" />否
               </div>
               <div id="inputs">
                  <span>是否有效</span>
                  <span>
                     <input type="radio" name="gisopen" value="true" checked="checked" />是
                     <input type="radio" name="gisopen" value="false" />否
                  </span>
               </div>
            </div>
            <div id="inputs2">
               <span>商品类别:</span>
               <select name="cid" id="cid">
                   <c:forEach items="${applicationScope.categorys}" var="category">
                      <option value="${category.cid}">${category.ctype}</option>
                   </c:forEach>
               </select>
            </div>
           </div>
           <div id="textarea1">
              <span id="message">产品描述:</span>
              <span><textarea rows="4" cols="64" name="gremark"></textarea></span>
          </div>
          
          <div id="textarea1">
             <span id="mesage">详细介绍：</span>
             <span><textare rows="5" cols="64" name="gxremark"></textare></span>
             </div>
             <input type="submit" value="添加" />
          </form>
       </div>
    </div>
</body>
</html>