package com.anyarusova.lab.servlet;

import javax.servlet.http.HttpServlet;
import java.io.IOException;

public class ClearServlet extends HttpServlet {

        @Override
        protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
            AreaCheckServlet.resultTable.Clear();
            getServletContext().getRequestDispatcher("/DataServlet").forward(request, response);
        }
}
