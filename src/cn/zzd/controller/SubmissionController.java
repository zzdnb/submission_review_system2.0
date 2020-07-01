package cn.zzd.controller;

import cn.zzd.dao.impl.SubmissionDaoImpl;
import cn.zzd.domain.Submission;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * @author 张振东
 */
@WebServlet(urlPatterns = "/api/submission")
public class SubmissionController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        String id = req.getParameter("id");
        try {
            List<Submission> submissions = new SubmissionDaoImpl().findBy("id", id);
            if (submissions.size() != 0) {
                Submission submission = submissions.get(0);
                req.setAttribute("submission", submission);
                req.getRequestDispatcher("/reviewer-review-submission.jsp").forward(req, resp);

            } else {
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");

        try {
            Submission submission = new SubmissionDaoImpl().save(new Submission("", req.getParameter("name_"), req.getParameter("content"), 0));
            req.setAttribute("submission", submission);
            req.getRequestDispatcher("/api/contribution").forward(req, resp);
        } catch (Exception e) {
            e.printStackTrace();
        }
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
