<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.dao.impl.AuthorDaoImpl" %>
<%@ page import="cn.zzd.domain.Author" %>

<%
    request.setCharacterEncoding("utf-8");
    new AuthorDaoImpl().save(new Author("", request.getParameter("account_"), request.getParameter("password_"), request.getParameter("name_"), request.getParameter("contact")));

    response.sendRedirect( "/admin-author.jsp");

%>