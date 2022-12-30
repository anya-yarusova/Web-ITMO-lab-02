package com.anyarusova.lab.dto;

import java.util.ArrayList;
import java.util.List;

public class ResultTable {

    private final List<Result> results = new ArrayList<>();

    public void addResult(float x, float y, float r, String result, String time, String scriptTime) {
        results.add(new Result(x, y, r, result, time, scriptTime));
    }

    public List<Result> getResults() {
        return results;
    }

    public void Clear() {
        results.clear();
    }

    @Override
    public String toString() {
        return "ResultTable{" +
                "results=" + results +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ResultTable that = (ResultTable) o;
        return results.equals(that.results);
    }
}
