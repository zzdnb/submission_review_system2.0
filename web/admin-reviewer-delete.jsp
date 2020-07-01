<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.List" %>
<%@ page import="cn.zzd.dao.impl.ReviewerDaoImpl" %>
<%@ page import="cn.zzd.domain.Reviewer" %>
<%@ page import="cn.zzd.dao.impl.OrderDaoImpl" %>
<%@ page import="cn.zzd.domain.Order" %>
<%

    try {
        List<Reviewer> by = new ReviewerDaoImpl().findBy("id", request.getParameter("id"));
        if (by.size() != 0) {
            Reviewer reviewer = by.get(0);
            String id = reviewer.getId();
            List<Order> reviewer_id = new OrderDaoImpl().findBy("reviewer_id", id);
            for (Order order : reviewer_id) {
                new OrderDaoImpl().delete(order);
            }
            new ReviewerDaoImpl().delete(reviewer);
        }
    } catch (Exception e) {
        e.printStackTrace();
    }

    response.sendRedirect("/admin-reviewer.jsp");

%>