package cn.zzd.controller;

import cn.zzd.dao.impl.SubmissionDaoImpl;
import cn.zzd.domain.Submission;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author 张振东
 */
@WebServlet(urlPatterns = "/api/admin")
public class AdminController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


        req.setCharacterEncoding("utf-8");

        try {
            new SubmissionDaoImpl().save(new Submission(req.getParameter("id"), req.getParameter("name_"), req.getParameter("content"), Integer.parseInt(req.getParameter("state"))));
        } catch (Exception e) {
            e.printStackTrace();
        }

        resp.sendRedirect("/admin-submission.jsp");

    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPut(req, resp);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doDelete(req, resp);
    }
}
