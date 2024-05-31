package com.restaurantproject.restaurant.service;

import com.restaurantproject.restaurant.model.Country;
import com.restaurantproject.restaurant.model.State;

import java.util.List;

public interface IStateService {
    List<State> getAllStates();
    List<State> getStatesByCountryName(String name);

}
