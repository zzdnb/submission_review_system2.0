<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.domain.Author" %>
<%@ page import="cn.zzd.dao.impl.AuthorDaoImpl" %>
<%@ page import="java.util.List" %>
<%@page contentType="text/html" pageEncoding="UTF-8" %>

<%
    Author author = null;
    String id = request.getParameter("id");
    try {
        List<Author> id1 = new AuthorDaoImpl().findBy("id", id);
        if (id1.size() != 0) {
            author = id1.get(0);
        }
    } catch (Exception e) {
        e.printStackTrace();
    }

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

<form action="<%=host%>/admin-author-modify-do.jsp" method="post">
    <input name="id" type="hidden" value="<%=author.getId()%>">
    <div class="mdui-textfield">
        <label class="mdui-textfield-label">账户</label>
        <input class="mdui-textfield-input" name="account_" value="<%=author.getAccount_()%>" type="text"/>
    </div>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label">密码</label>
        <input class="mdui-textfield-input" name="password_" value="<%=author.getPassword_()%>" type="text"/>
    </div>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label">姓名</label>
        <input class="mdui-textfield-input" name="name_" value="<%=author.getName_()%>" type="text"/>
    </div>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label">联系方式</label>
        <input class="mdui-textfield-input" name="contact" value="<%=author.getContact()%>" type="text"/>
    </div>
    <button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit'>执行</button>
</form>
</body>
</html>