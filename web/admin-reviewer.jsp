<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.List" %>
<%@ page import="cn.zzd.domain.Reviewer" %>
<%@ page import="cn.zzd.dao.impl.ReviewerDaoImpl" %>
<%@page contentType="text/html" pageEncoding="UTF-8" %>

<%

    List<Reviewer> all = new ReviewerDaoImpl().findAll();


%>
<!DOCTYPE html>
<html>
<%@include file="/head.jsp" %>
<body>

<div class="mdui-row"
     style="margin-right: 0px;
            margin-left: 0px; ">
    <div class="mdui-appbar mdui-ripple background-color height"
         style="--color:rgb(63,81,181);--height: 4rem">
        <a href="<%=host%>" class="mdui-typo-headline mdui-text-color-white"
           style="margin: 1rem;padding:0rem;"><%=siteName%>
        </a>
        <a href="<%=host%>/admin.jsp" class="mdui-typo-headline mdui-text-color-white"
           style="margin: 1rem;padding:0rem;">管理员</a>
    </div>
</div>
<form action='<%=host%>/admin-reviewer-insert.jsp' method='get'>
    <button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>增加</button>
</form>

<div class="mdui-table-fluid">
    <table class="mdui-table mdui-table-hoverable">
        <thead>
        <tr>
            <th>#</th>
            <th>ID</th>
            <th>账户</th>
            <th>密码</th>
            <th>姓名</th>
            <th>联系方式</th>
            <th>金额统计</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <%
            Integer index = 0;
            for (Reviewer reviewer : all) {
        %>
        <tr>
            <td><%=++index%>
            </td>
            <td><%=reviewer.getId()%>
            </td>
            <td><%=reviewer.getAccount_()%>
            </td>
            <td><%=reviewer.getPassword_()%>
            </td>
            <td><%=reviewer.getName_()%>
            </td>
            <td><%=reviewer.getContact()%>
            </td>
            <td><%=reviewer.getTotal()%>
            </td>
            <% String
                    a = "<form action='" + host + "/admin-reviewer-modify.jsp' method='get'><input type='hidden' name='id' value='" + reviewer.getId() + "'/><button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>修改</button></form>" +
                    "<form action='" + host + "/admin-reviewer-delete.jsp' method='get'><input type='hidden' name='id' value='" + reviewer.getId() + "'/><button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>删除</button></form>";
            %>
            <td class="flex"
                style="--flex-direction: row; --justify-content: space-around; --align-items: center;"><%=a%>
            </td>
        </tr>
        <%}%>
        </tbody>
    </table>
</div>


</body>
</html>