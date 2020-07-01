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

    }
    body{

        background: url("img/timg.jpg")no-repeat ;
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
        <a href="<%=host%>" class="mdui-typo-headline mdui-text-color-white"
           style="margin: 1rem;padding:0rem;">登录</a>
    </div>
</div>
<div align="center" style="padding-top: 50px ;"> <h1>作者&审稿人的登录</h1></div>
<div class="flex mdui-col-md-12"
     style="--flex-direction: column; --justify-content: center; --align-items: center; margin-top: 100px ">
    <form action="/api/login" method="POST" class="flex mdui-col-md-6"
          style="--flex-direction: column; --justify-content: center; --align-items: center;">
        <div class="mdui-col-md-6 mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">登录账户</label>
            <input class="mdui-textfield-input" type="text" name="account_" required/>
            <div class="mdui-textfield-error">用户名不能为空</div>
        </div>
        <div class="mdui-col-md-6 mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">密码</label>
            <input class="mdui-textfield-input" type="password" name="password_" required/>
            <div class="mdui-textfield-error">密码至少 6 位，且包含大小写字母</div>
        </div>
        <div class="mdui-col-md-6 flex"
             style="--flex-direction: row; --justify-content: space-around; --align-items: center;margin-top: 25px">
            <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="submit">登入</button>
            <button class="mdui-btn mdui-color-pink-accent mdui-ripple" type="reset">重置</button>
        </div>
    </form>
</div>
<div class="footer" align="center">

        <span>©️2020 ZBDX</span>
        <span>在线投稿审稿管理系统</span>
        <span> 设计师:
                                          张振东，乔保杰，王琛琪                                  </span>

    <br><br>
    <a href="admin.jsp" title="点我可看后台">管理员界面</a>
</div>


</body>
</html>