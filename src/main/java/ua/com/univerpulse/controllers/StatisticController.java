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

        players.add(new Player("One"));
        players.add(new Player("Two"));
        players.add(new Player("Three" ));
        players.add(new Player("Four"));

        return players;
    }
}

