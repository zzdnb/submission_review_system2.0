<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.dao.impl.AuthorDaoImpl" %>
<%@ page import="cn.zzd.domain.Author" %>
<%@ page import="java.util.List" %>
<%@ page import="cn.zzd.dao.impl.ContributionDaoImpl" %>
<%@ page import="cn.zzd.domain.Contribution" %>

<%

    try {
        List<Author> by = new AuthorDaoImpl().findBy("id", request.getParameter("id"));
        if (by.size() != 0) {
            Author author = by.get(0);
            String id = author.getId();
            List<Contribution> author_id = new ContributionDaoImpl().findBy("author_id", id);
            for (Contribution contribution : author_id) {
                new ContributionDaoImpl().delete(contribution);
            }
            new AuthorDaoImpl().delete(author);
        }
    } catch (Exception e) {
        e.printStackTrace();
    }

    response.sendRedirect("/admin-author.jsp");

%>