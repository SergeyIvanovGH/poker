package ua.com.univerpulse.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.com.univerpulse.model.Player;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StatisticController {

    @RequestMapping("/statistic")
    public List<Player> getStatistic() {

        List<Player> players = new ArrayList<>();

        players.add(new Player("One", 10));
        players.add(new Player("Two", 8));
        players.add(new Player("Three", 15));
        players.add(new Player("Four", 1));

        return players;
    }
}

