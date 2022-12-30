package com.anyarusova.lab.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
            getServletContext().getRequestDispatcher("/AreaCheckServlet").forward(request, response);
        } else if (request.getParameter("loadData").equals(request)) {
            getServletContext().getRequestDispatcher("/DataServlet").forward(request, response);
        } else {
            response.setStatus(HttpServletResponse.SC_FOUND); // 302
            response.setHeader("Location", "http://localhost:4667/lab02-1.0-SNAPSHOT/");
        }
    }

}
