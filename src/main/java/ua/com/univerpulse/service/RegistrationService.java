package ua.com.univerpulse.service;

import ua.com.univerpulse.model.RegistrationRequest;

import java.util.List;
import java.util.Optional;

/**
 * Created by svivanov on 12.07.16.
 */
public interface RegistrationService {

    void save(RegistrationRequest registrationRequest);
    List<RegistrationRequest> get();
    Optional<RegistrationRequest> findByName(String Username);
}
