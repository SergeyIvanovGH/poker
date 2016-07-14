package ua.com.univerpulse.service;

import org.springframework.stereotype.Service;
import ua.com.univerpulse.model.RegistrationRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    private List<RegistrationRequest> registrationRequests;

    public RegistrationServiceImpl() {
        registrationRequests = new ArrayList<>();
        registrationRequests.add(new RegistrationRequest("admin@meta.ua", "321"));
    }

    @Override
    public void save(RegistrationRequest registrationRequest) {
        registrationRequests.add(registrationRequest);
    }

    @Override
    public List<RegistrationRequest> get() {
        return registrationRequests;
    }

    @Override
    public Optional<RegistrationRequest> findByName(String Username) {
        for(RegistrationRequest registrationRequest : registrationRequests) {
            if (registrationRequest.geteMail().equals(Username)) {
                return Optional.of(registrationRequest);
            }
        }
        return Optional.empty();
    }
}
