package com.anyarusova.lab.servlet;

import com.anyarusova.lab.dto.ResultTable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

public class AreaCheckServlet extends HttpServlet {

    public static ResultTable resultTable = new ResultTable();

    private static String checkArea(float x, float y, float r) {
        boolean res =  (x >= 0 && y >= 0 && x * x + y * y <= r * r / 4) ||
                (x <= 0 && y <= 0 && x >= -r  && y >= -r / 2) ||
                (x >= 0 && y <= 0 && y >= x / 2 - r / 2);
        if (res) {
            return  "HIT";
        } else {
            return "MISS";
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long startTime = System.nanoTime();
        final String inputX = request.getParameter("x");
        final String inputY = request.getParameter("y");
        final String inputR = request.getParameter("r");
        final float x, y, r;
        final String result;
        try {
            y = Float.parseFloat(inputY);
            r = Float.parseFloat(inputR);
            if (request.getParameter("fromG").equals("true")) {
                x = Float.parseFloat(inputX);
                result = checkArea(x, y, r);
                resultTable.addResult(x, y, r, result,  new Date().toString(), Long.toString((System.nanoTime() - startTime) / 1000));
                getServletContext().getRequestDispatcher("/DataServlet").forward(request, response);
            } else {
                x = Integer.parseInt(inputX);
                if (x < -4 || x > 4 || y < -3 || y > 5 || r < 2 || r > 5) {
                    throw new IllegalArgumentException();
                } else {
                    result = checkArea(x, y, r);
                    resultTable.addResult(x, y, r, result,  new Date().toString(), Long.toString((System.nanoTime() - startTime) / 1000));
                    getServletContext().getRequestDispatcher("/DataServlet").forward(request, response);
                }
            }
        } catch (IllegalArgumentException e) {
            response.getWriter().write("Invalid input");
        } catch (IOException | ServletException e) {
            response.getWriter().write("Error");
        }

    }

}
