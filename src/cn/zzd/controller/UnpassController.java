package cn.zzd.controller;

import cn.zzd.dao.impl.OrderDaoImpl;
import cn.zzd.dao.impl.SubmissionDaoImpl;
import cn.zzd.domain.Order;
import cn.zzd.domain.Submission;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;


@WebServlet(urlPatterns = "/api/unpass")
public class UnpassController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            List<Submission> rs = new SubmissionDaoImpl().findBy("id", req.getParameter("id"));
            if (rs.size() != 0) {
                Submission submission = rs.get(0);
                submission.setState(3);
                new SubmissionDaoImpl().save(submission);
                List<Order> id = new OrderDaoImpl().findBy("id", req.getParameter("oid"));
                if (id.size() != 0) {
                    Order order = id.get(0);
                    order.setState(2);
                    new OrderDaoImpl().save(order);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        resp.sendRedirect("/api/pending");
    }
}
