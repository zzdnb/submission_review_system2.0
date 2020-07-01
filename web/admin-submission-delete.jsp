<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.List" %>
<%@ page import="cn.zzd.dao.impl.ContributionDaoImpl" %>
<%@ page import="cn.zzd.domain.Contribution" %>

<%@ page import="cn.zzd.domain.Submission" %>
<%@ page import="cn.zzd.dao.impl.SubmissionDaoImpl" %>
<%@ page import="cn.zzd.dao.impl.OrderDaoImpl" %>
<%@ page import="cn.zzd.domain.Order" %>
<%
    try {
        List<Submission> by = new SubmissionDaoImpl().findBy("id", request.getParameter("id"));
        if (by.size() != 0) {
            Submission submission = by.get(0);
            String id = submission.getId();
            List<Contribution> submission_id = new ContributionDaoImpl().findBy("submission_id", id);
            for (Contribution contribution : submission_id) {
                new ContributionDaoImpl().delete(contribution);
            }
            List<Order> submission_id1 = new OrderDaoImpl().findBy("submission_id", id);
            for (Order order : submission_id1) {
                new OrderDaoImpl().delete(order);
            }
            new SubmissionDaoImpl().delete(submission);
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    response.sendRedirect("/admin-submission.jsp");
%>