package ua.com.univerpulse.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ua.com.univerpulse.model.RegistrationRequest;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final Log logger = LogFactory.getLog(UserDetailsServiceImpl.class);

    @Autowired
    private RegistrationService registrationService;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        logger.info("loadUserByUsername called");

        Optional<RegistrationRequest> userDetails = registrationService.findByName(s);
        RegistrationRequest registrationRequest = userDetails.orElseThrow(() -> new UsernameNotFoundException(
                String.format("User with email=%s was not found", s)));

        logger.info(registrationRequest.geteMail());
        logger.info(registrationRequest.getPassword());

        return new User(registrationRequest.geteMail(), registrationRequest.getPassword(), new HashSet<>());
    }
}
