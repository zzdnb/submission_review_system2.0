package cn.zzd.controller;

import cn.zzd.dao.impl.OrderDaoImpl;
import cn.zzd.dao.impl.SubmissionDaoImpl;
import cn.zzd.domain.Order;
import cn.zzd.domain.Reviewer;
import cn.zzd.domain.Submission;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;


/**
 * @author 张振东
 */
@WebServlet(urlPatterns = "/api/adopt")
public class AdoptController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            HttpSession session = req.getSession(true);
            List<Submission> rs = new SubmissionDaoImpl().findBy("id", req.getParameter("id"));
            Submission submission = null;
            if (rs.size() != 0) {
                submission = rs.get(0);
                submission.setState(2);
                new SubmissionDaoImpl().save(submission);
            }
            Reviewer reviewer = (Reviewer) session.getAttribute("reviewer");
            new OrderDaoImpl().save(new Order("", 0, Integer.parseInt(req.getParameter("payment")), Integer.parseInt(req.getParameter("fee")), Integer.parseInt(req.getParameter("charge")), reviewer.getId(), submission.getId()));
        } catch (Exception e) {
            e.printStackTrace();
        }
        resp.sendRedirect( "/api/reviewer");
    }
}
