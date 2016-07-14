package ua.com.univerpulse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ua.com.univerpulse.model.RegistrationRequest;

import java.util.Optional;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private RegistrationService registrationService;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        System.out.println(s);

        Optional<RegistrationRequest> userDetails = registrationService.findByName(s);
        RegistrationRequest registrationRequest = userDetails.orElseThrow(() -> new UsernameNotFoundException(
                String.format("User with email=%s was not found", s)));

        System.out.println(registrationRequest.geteMail());
        System.out.println(registrationRequest.getPassword());

        return new User(registrationRequest.geteMail(), registrationRequest.getPassword(), null);
    }
}
