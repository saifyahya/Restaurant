package com.restaurantproject.restaurant.service.impl;

import com.restaurantproject.restaurant.model.State;
import com.restaurantproject.restaurant.repository.StateRepository;
import com.restaurantproject.restaurant.service.IStateService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StateServiceImpl implements IStateService {
    private StateRepository stateRepository;

    @Override
    public List<State> getAllStates() {
        return stateRepository.findAll();
    }

    @Override
    public List<State> getStatesByCountryName(String name) {
        return stateRepository.findAllByCountryName(name);
    }
}
