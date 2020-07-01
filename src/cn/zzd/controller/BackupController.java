package cn.zzd.controller;



import cn.zzd.util.JdbcUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


/**
 * @author 张振东
 */
@WebServlet(urlPatterns = "/db/back")
public class BackupController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            JdbcUtils.backup();
        } catch (Exception e) {
            e.printStackTrace();
        }
        resp.sendRedirect("/admin.jsp");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            JdbcUtils.restore();
        } catch (Exception e) {
            e.printStackTrace();
        }
        resp.sendRedirect( "/admin.jsp");
    }
}
