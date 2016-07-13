package ua.com.univerpulse.service;

import ua.com.univerpulse.model.RegistrationRequest;

import java.util.List;

/**
 * Created by svivanov on 12.07.16.
 */
public interface RegistrationService {

    public void save(RegistrationRequest registrationRequest);
    public List<RegistrationRequest> get();
}
