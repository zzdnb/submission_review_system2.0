<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 12:58
  To change this template use File | Settings | File Templates.
--%>
<%@page pageEncoding="UTF-8" %>
<%@include file="/login.jsp" %>
<%
    if (session.getAttribute("author") != null) {
       response.sendRedirect("/author.jsp");
    } else if (session.getAttribute("reviewer") != null) {
       response.sendRedirect("/reviewer.jsp");
    } else {
%>
<%="<script type='text/javascript'> mdui.alert('用户名或者密码错误，请重新输入！');</script>"%>
<% }%>
