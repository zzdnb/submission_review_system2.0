<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.dao.impl.AuthorDaoImpl" %>
<%@ page import="cn.zzd.domain.Author" %>
<%@ page import="java.util.List" %>
<%@page contentType="text/html" pageEncoding="UTF-8" %>

<%

    List<Author> all = new AuthorDaoImpl().findAll();


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

        background-image: url("img/001.jpg");
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
<form action='admin-author-insert.jsp' method='get'>
    <button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>增加</button></form>

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
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <%
            Integer index = 0;
            for (Author author : all) {
        %>
        <tr>
            <td><%=++index%>
            </td>
            <td><%=author.getId()%>
            </td>
            <td><%=author.getAccount_()%>
            </td>
            <td><%=author.getPassword_()%>
            </td>
            <td><%=author.getName_()%>
            </td>
            <td><%=author.getContact()%>
            </td>
            <% String
                    a = "<form action='" + host + "/admin-author-modify.jsp' method='get'><input type='hidden' name='id' value='" + author.getId() + "'/><button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>修改</button></form>" +
                    "<form action='" + host + "/admin-author-query.jsp' method='get'><input type='hidden' name='id' value='" + author.getId() + "'/><button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>查询</button></form>"+
                    "<form action='" + host + "/admin-author-delete.jsp' method='get'><input type='hidden' name='id' value='" + author.getId() + "'/><button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>删除</button></form>";
            %>
            <td class="flex"
                style="--flex-direction: row; --justify-content: space-around; --align-items: center;"><%=a%>
        </tr>
        <%}%>
        </tbody>
    </table>
</div>

<div class="footer" align="center">

    <span>©️2020 ZBDX</span>
    <span>在线投稿审稿系统</span>
    <span> 设计师:
    张振东，乔保杰，王琛琪                                  </span>


</div>
</body>
</html>