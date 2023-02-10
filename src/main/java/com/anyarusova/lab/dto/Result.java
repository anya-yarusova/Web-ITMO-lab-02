package com.anyarusova.lab.dto;


import java.util.Objects;

public class Result {
    private final float x;
    private final float y;
    private final float r;
    private final String result;
    private final String time;
    private final String scriptTime;

    public Result(float x, float y, float r, String result, String time, String scriptTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        this.time = time;
        this.scriptTime = scriptTime;
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getR() {
        return r;
    }

    public boolean isResult() {
        if (result.equals("HIT")) {
            return true;

        } else {
            return false;
        }
    }

    public String getResult() {
        return result;
    }

    public String getTime() {
        return time;
    }

    public String getScriptTime() {
        return scriptTime;
    }

    @Override
    public String toString() {
        return "Result{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", result=" + result +
                ", time='" + time + '\'' +
                ", scriptTime='" + scriptTime + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Result result1 = (Result) o;

        return Objects.equals(x, result1.x) && Objects.equals(y, result1.y) && Objects.equals(r, result1.r) && Objects.equals(result, result1.getResult()) && Objects.equals(scriptTime, result1.scriptTime) && Objects.equals(time, result1.time);
    }

}
