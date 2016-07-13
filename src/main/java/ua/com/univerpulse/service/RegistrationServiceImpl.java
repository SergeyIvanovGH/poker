package ua.com.univerpulse.service;

import org.springframework.stereotype.Service;
import ua.com.univerpulse.model.RegistrationRequest;

import java.util.ArrayList;
import java.util.List;

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
}
