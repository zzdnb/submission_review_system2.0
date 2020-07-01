<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.domain.Reviewer" %>
<%@ page import="cn.zzd.dao.impl.ReviewerDaoImpl" %>
<%
    request.setCharacterEncoding("utf-8");

    new ReviewerDaoImpl().save(new Reviewer("", request.getParameter("account_"), request.getParameter("password_"), request.getParameter("name_"), request.getParameter("contact"), Long.parseLong("0")));

    response.sendRedirect("/admin-reviewer.jsp");

%>