package ua.com.univerpulse.model;

public class Player {

    private String name;
    private double rate;

    public Player(String name) {
        this.name = name;
        this.rate = Math.random() * 100;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }
}
