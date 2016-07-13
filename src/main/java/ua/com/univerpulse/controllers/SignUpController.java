package ua.com.univerpulse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ua.com.univerpulse.model.RegistrationRequest;
import ua.com.univerpulse.service.RegistrationService;

import java.util.List;

@RestController
public class SignUpController {

    @Autowired
    private RegistrationService registrationService;

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public void registerUser(@RequestBody RegistrationRequest registrationRequest ) {
/*
        System.out.println("register controller is OK!");
        System.out.println(registrationRequest.geteMail());
        System.out.println(registrationRequest.getPassword());
*/
        registrationService.save(registrationRequest);
    }

    @RequestMapping(value="/listplayers")
    public List<RegistrationRequest> listPlayers() {
        return registrationService.get();
    }
}
