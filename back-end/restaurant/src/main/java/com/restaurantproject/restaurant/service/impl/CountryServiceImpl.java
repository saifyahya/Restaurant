package com.restaurantproject.restaurant.service.impl;

import com.restaurantproject.restaurant.model.Country;
import com.restaurantproject.restaurant.repository.CountryRepository;
import com.restaurantproject.restaurant.service.ICountryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CountryServiceImpl implements ICountryService {
    private CountryRepository countryRepository;

    @Override
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
}
