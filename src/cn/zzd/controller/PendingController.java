package cn.zzd.controller;

import cn.zzd.dao.impl.AuthorDaoImpl;
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
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(urlPatterns = {"/api/pending"})
public class PendingController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            req.setCharacterEncoding("utf-8");
            List<Submission> all = new SubmissionDaoImpl().findAll();
            List<Submission> submissions = new ArrayList<>();
            ArrayList<List<Author>> lists = new ArrayList<List<Author>>();
            for (Submission submission : all) {
                if (submission.getState() == 1) {
                    ArrayList<Author> authors = new ArrayList<>();
                    List<Contribution> contributionList = new ContributionDaoImpl().findBy("submission_id", submission.getId());
                    if (contributionList.size() != 0) {
                        for (Contribution contribution : contributionList) {
                            String authorId = contribution.getAuthorId();
                            List<Author> authorList = new AuthorDaoImpl().findBy("id", authorId);
                            if (authorList.size() != 0) {
                                authors.add(authorList.get(0));
                            }
                        }
                    }else {
                        continue;
                    }
                    submissions.add(submission);
                    lists.add(authors);
                }
            }
            req.setAttribute("submissions", submissions);
            req.setAttribute("authors", lists);

            req.getRequestDispatcher("/awaiting-review-submission.jsp").forward(req, resp);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
