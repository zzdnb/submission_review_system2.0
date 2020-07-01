<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.domain.Author" %>
<%@ page import="cn.zzd.dao.impl.AuthorDaoImpl" %>
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
        color: black;
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




<form action="<%=host%>/admin-author-insert-do.jsp" method="post" >
    <div class="mdui-textfield">
        <label class="mdui-textfield-label"><h3>账户</h3></label>
        <input class="mdui-textfield-input" name="account_" type="text"/>
    </div>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label"><h3>密码</h3></label>
        <input class="mdui-textfield-input" name="password_" type="text"/>
    </div>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label"><h3>姓名</h3></label>
        <input class="mdui-textfield-input" name="name_" type="text"/>
    </div>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label"> <h3>联系方式</h3></label>
        <input class="mdui-textfield-input" name="contact" type="text"/>
    </div>

    <center><button class='mdui-btn mdui-color-pink-accent mdui-ripple' type='submit' >执行</button></center>

</form>
<div class="footer" align="center">

    <span>©️2020 ZBDX</span>
    <span>在线投稿审稿系统</span>
    <span> 设计师:
                                          张振东，乔保杰，王琛琪                                  </span>


</div>
</body>
</html>