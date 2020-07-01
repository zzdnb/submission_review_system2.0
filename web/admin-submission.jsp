<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.List" %>
<%@ page import="cn.zzd.dao.impl.SubmissionDaoImpl" %>
<%@ page import="cn.zzd.domain.Submission" %>
<%@page contentType="text/html" pageEncoding="UTF-8" %>

<%
    List<Submission> all = null;
    try {
        all = new SubmissionDaoImpl().findAll();
    } catch (Exception e) {
        e.printStackTrace();
    }
%>
<!DOCTYPE html>
<html>
<%@include file="/head.jsp" %>
<style>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        font-size: 20px;
        color: yellow;
    }
    body{

        background-image: url("img/003.png");
        background-size: 100%;

    }


</style>
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
<form action='<%=host%>/admin-submission-insert.jsp' method='get'>
    <button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>增加</button>
</form>

<div class="mdui-table-fluid">
    <table class="mdui-table mdui-table-hoverable">
        <thead>
        <tr>
            <th>#</th>
            <th>ID</th>
            <th>名称</th>
            <th>状态</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <%
            Integer index = 0;
            for (Submission submission : all) {
        %>
        <tr>
            <td><%=++index%>
            </td>
            <td><%=submission.getId()%>
            </td>
            <td><%=submission.getName_()%>
            </td>
            <td><%=submission.getState()%>
            </td>

            <% String
                    a = "<form action='" + host + "/admin-submission-modify.jsp' method='get'><input type='hidden' name='id' value='" + submission.getId() + "'/><button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>修改</button></form>" +
                    "<form action='" + host + "/admin-submission-delete.jsp' method='get'><input type='hidden' name='id' value='" + submission.getId() + "'/><button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>删除</button></form>";
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