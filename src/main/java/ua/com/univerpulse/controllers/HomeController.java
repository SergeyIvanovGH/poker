package ua.com.univerpulse.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String getDefaultPage() {
        return "home";
    }

    /*
    @RequestMapping("/home")
    public String Home() {
        return "home";
    }

    @RequestMapping("/index")
    public String Index() {
        return "index";
    }

    @RequestMapping("/game")
    public String game() {
        return "game";
    }
*/
}

