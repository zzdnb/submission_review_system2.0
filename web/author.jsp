<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 13:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="cn.zzd.domain.Author" %>
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<% Author author = (Author) session.getAttribute("author");%>

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

    body {

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
           style="margin: 1rem;padding:0rem;">作者园</a>
    </div>
</div>
<div class="flex mdui-col-md-12"
     style="--flex-direction: column; --justify-content: center; --align-items: center;">
    <h1 class="doc-title mdui-text-color-theme">个人基本信息</h1>
    <h2>姓名：<font style="background: #00b0ff"><%=author.getName_()%>
    </font>
    </h2>
    <h2>联系方式：
        <font style="background: yellow"><%=author.getContact()%>
        </font>
    </h2>

    <div style="margin-bottom: 50px ;margin-top: 50px" align="center">
        <form method="get" action="<%=host%>/author-contributions-submission.jsp">
            <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">在线投递稿件</button>
        </form>
    </div>

    <div style="margin-bottom: 50px " align="center">
        <form method="get" action="<%=host%>/api/contribution">
            <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">查看投稿记录</button>
        </form>
    </div>
    <div style="margin-bottom: 50px " align="center">
        <form method="get" action="<%=host%>/author-information-modify.jsp">
            <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">修改个人信息</button>
        </form>
    </div>

</div>

<div class="footer" align="center">

    <span>©️2020 ZBDX</span>
    <span>在线投稿审稿系统</span>
    <span> 设计师:
                                          张振东，乔保杰，王琛琪                                  </span>


</div>
</body>
</html>