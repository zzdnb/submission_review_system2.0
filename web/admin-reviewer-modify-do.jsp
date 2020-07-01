<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.dao.impl.ReviewerDaoImpl" %>
<%@ page import="cn.zzd.domain.Reviewer" %>
<%
    request.setCharacterEncoding("utf-8");

    new ReviewerDaoImpl().save(new Reviewer(request.getParameter("id"), request.getParameter("account_"), request.getParameter("password_"), request.getParameter("name_"), request.getParameter("contact"), Long.parseLong(request.getParameter("total"))));

    response.sendRedirect( "/admin-reviewer.jsp");

%>