package cn.zzd.controller;

import cn.zzd.dao.impl.ContributionDaoImpl;
import cn.zzd.dao.impl.SubmissionDaoImpl;
import cn.zzd.domain.Author;
import cn.zzd.domain.Contribution;
import cn.zzd.domain.Submission;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;


@WebServlet(urlPatterns = "/api/submit")
public class SubmitController extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            req.setCharacterEncoding("utf-8");
            new SubmissionDaoImpl().save(new Submission(req.getParameter("id"), req.getParameter("name_"), req.getParameter("content"), Integer.parseInt(req.getParameter("state"))));
            resp.sendRedirect( "/api/contribution");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {   req.setCharacterEncoding("utf-8");
            HttpSession session = req.getSession(true);
            Author author = (Author)session.getAttribute("author");
            List<Contribution> contributions = new ContributionDaoImpl().findUni(author.getId(), req.getParameter("id"));
            if (contributions.size() != 0) {
                Contribution contribution = contributions.get(0);
                new ContributionDaoImpl().delete(contribution);
                resp.sendRedirect("/api/contribution");
            } else {

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
