<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 12:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.domain.Reviewer" %>
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<% Reviewer reviewer = (Reviewer) session.getAttribute("reviewer");%>

<!DOCTYPE html>
<html>
<%@include file="head.jsp" %>
<style>
    body{
        background-image: url("img/0.jpg");
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
        <a href="<%=host%>/api/login" class="mdui-typo-headline mdui-text-color-white"
           style="margin: 1rem;padding:0rem;">审稿人</a>
    </div>
</div>


<form action="<%=host%>/api/reviewer" method="post" class="flex"
      style="--flex-direction: column; --justify-content: center; --align-items: center;">
    <h1 class="doc-title mdui-text-color-theme">基本信息</h1>
    <input type="hidden" value="<%=reviewer.getAccount_()%>" name="account_"/>
    <input type="hidden" value="<%=reviewer.getTotal()%>" name="total"/>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label">姓名：</label>
        <input class="mdui-textfield-input" type="text" value="<%=reviewer.getName_()%>" name="name_" maxlength="20"/>
    </div>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label">密码：</label>
        <input class="mdui-textfield-input" type="text" value="<%=reviewer.getPassword_()%>" name="password_"
               maxlength="20"/>
    </div>
    <div class="mdui-textfield">
        <label class="mdui-textfield-label"> 联系方式：</label>
        <input class="mdui-textfield-input" type="text" value="<%=reviewer.getContact()%>" name="contact"
               maxlength="20"/>
    </div>
    <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">提交修改</button>

</form>
</div>
</body>
</html>