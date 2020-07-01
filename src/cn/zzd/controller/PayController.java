package cn.zzd.controller;

import cn.zzd.dao.impl.OrderDaoImpl;
import cn.zzd.dao.impl.ReviewerDaoImpl;
import cn.zzd.dao.impl.SubmissionDaoImpl;
import cn.zzd.domain.Order;
import cn.zzd.domain.Reviewer;
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
@WebServlet(urlPatterns = {"/api/pay"})
public class PayController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        String sid = req.getParameter("sid");

        try {
            List<Submission> id1 = new SubmissionDaoImpl().findBy("id", sid);
            if(id1.size()!=0){
                Submission submission = id1.get(0);
                submission.setState(5);
                new SubmissionDaoImpl().save(submission);
            }
            List<Order> orders = new OrderDaoImpl().findBy("submission_id", sid);
            if (orders.size() != 0) {
                Order order = orders.get(0);
                String reviewer_id = order.getReviewer_id();
                List<Reviewer> id = new ReviewerDaoImpl().findBy("id", reviewer_id);
                if (id.size() != 0) {
                    Reviewer reviewer = id.get(0);
                    reviewer.setTotal(reviewer.getTotal() + order.getFee());
                    new ReviewerDaoImpl().save(reviewer);

                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        resp.sendRedirect( "/api/contribution");
    }
}
