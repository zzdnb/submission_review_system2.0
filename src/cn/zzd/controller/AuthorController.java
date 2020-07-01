package cn.zzd.controller;

import cn.zzd.dao.impl.AuthorDaoImpl;
import cn.zzd.domain.Author;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;


@WebServlet(urlPatterns = "/api/author")
public class AuthorController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
        try {
            List<Author> all = new AuthorDaoImpl().findAll();
            System.out.println(all);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        try {
            req.setCharacterEncoding("utf-8");
            HttpSession session = req.getSession(true);
            Author author = (Author) session.getAttribute("author");
          new AuthorDaoImpl().save(new Author(author.getId(), req.getParameter("account_"), req.getParameter("password_"), req.getParameter("name_"), req.getParameter("contact")));
            List<Author> authorList = new AuthorDaoImpl().findBy("id", author.getId());
            if (authorList.size() != 0) {
                session.setAttribute("author",authorList.get(0));
                resp.sendRedirect("/api/login");
            }else{
                session.setAttribute("author",null);
                resp.sendRedirect( "/api/login");
            }


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
