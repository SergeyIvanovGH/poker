package ua.com.univerpulse.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String getDefaultPage() {
        return "index";
    }

//    @RequestMapping("/*")
//    public String getOtherPage() {
//        return "index";
//    }

}

