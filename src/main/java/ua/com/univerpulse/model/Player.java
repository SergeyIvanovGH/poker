package ua.com.univerpulse.model;

/**
 * Created by svivanov on 01.06.16.
 */
public class Player {

    private String name;
    private int rate;

    public Player() {
    }

    public Player(String name, int rate) {
        this.name = name;
        this.rate = rate;
    }

    public Player(String name) {
        this.name = name;
        this.rate = (int) (Math.random() * 100);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }
}
