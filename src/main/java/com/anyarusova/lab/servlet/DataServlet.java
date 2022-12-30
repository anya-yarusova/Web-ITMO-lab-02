package com.anyarusova.lab.servlet;


import com.anyarusova.lab.dto.ResultTable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class DataServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResultTable resultTable = AreaCheckServlet.resultTable;
        PrintWriter out = response.getWriter();
        StringBuilder stringBuilder = new StringBuilder();
        if (resultTable != null) {
            for (int i = 0; i < resultTable.getResults().size(); i++) {
                stringBuilder.append("%");
                stringBuilder.append(resultTable.getResults().get(i).getX());
                stringBuilder.append("*").append(resultTable.getResults().get(i).getY());
                stringBuilder.append("*").append(resultTable.getResults().get(i).getR());
                stringBuilder.append("*").append(resultTable.getResults().get(i).getResult());
                stringBuilder.append("*").append(resultTable.getResults().get(i).getTime());
                stringBuilder.append("*").append(resultTable.getResults().get(i).getScriptTime()).append(" ms");
            }
        }
        out.write(stringBuilder.toString());
    }

}
