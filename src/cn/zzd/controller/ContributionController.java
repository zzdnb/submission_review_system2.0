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
import java.util.ArrayList;
import java.util.List;

@WebServlet(urlPatterns = "/api/contribution")
public class ContributionController extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            req.setCharacterEncoding("utf-8");
            HttpSession session = req.getSession(true);
            Submission submission = (Submission) req.getAttribute("submission");
            Author author = (Author) session.getAttribute("author");
            new ContributionDaoImpl().save(new Contribution("", author.getId(), submission.getId()));
            req.setAttribute("share", submission.getId());
            req.getRequestDispatcher("/author-contributions-submission-success.jsp").forward(req, resp);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            req.setCharacterEncoding("utf-8");
            HttpSession session = req.getSession(true);
            Author author = (Author) session.getAttribute("author");

            List<Contribution> all = new ContributionDaoImpl().findBy("author_id", author.getId());
            List<Submission> submissions = new ArrayList<>();
            for (Contribution contribution : all) {
                Submission submission = new SubmissionDaoImpl().findBy("id", contribution.getSubmissionId()).get(0);

                submissions.add(submission);
            }
            req.setAttribute("submissions", submissions);
            req.getRequestDispatcher("/author-all-contributions.jsp").forward(req, resp);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
