<%--
  Created by IntelliJ IDEA.
  User: 张振东
  Date: 2020/6/23
  Time: 12:52
  To change this template use File | Settings | File Templates.
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" %>


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

        background-image: url("img/0.jpg");
        background-size: 100%;

    }


</style>
<body>

<div class="mdui-row "
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
<div class="flex mdui-col-md-12"
     style="--flex-direction: column; --justify-content: center; --align-items: center;">
    <h1 class="doc-title mdui-text-color-theme">管理员界面</h1>



    <ul class="mdui-list">
        <li class="mdui-list-item mdui-ripple" style="margin-bottom: 50px">
            <form method="get" action="<%=host%>/admin-author.jsp">
                <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">作者管理</button>
            </form>
        </li>


        <li class="mdui-list-item mdui-ripple" style="margin-bottom: 50px">
            <form method="get" action="<%=host%>/admin-submission.jsp">
                <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">稿件管理</button>
            </form>

        </li>
        <li class="mdui-list-item mdui-ripple" style="margin-bottom: 50px">
            <form method="get" action="<%=host%>/admin-reviewer.jsp">
                <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">审阅人管理</button>
            </form>

        </li>
        <li class="mdui-list-item mdui-ripple" style="margin-bottom: 50px">
            <form method="get" action="<%=host%>/db/back">
                <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">数据库备份</button>
            </form>

        </li>
        <li class="mdui-list-item mdui-ripple">
            <form method="post" action="<%=host%>/db/back">
                <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">数据库还原</button>
            </form>

        </li>
    </ul>

</div>
<div class="footer" align="center">

    <span>©️2020 ZBDX</span>
    <span>在线投稿审稿管理系统</span>
    <span> 设计师:
                                          张振东，乔保杰，王琛琪                                  </span>


</div>
</body>
</html>