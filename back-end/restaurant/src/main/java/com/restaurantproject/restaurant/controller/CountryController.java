package com.restaurantproject.restaurant.controller;

import com.restaurantproject.restaurant.model.Country;
import com.restaurantproject.restaurant.service.ICountryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://127.0.0.1:4200")
@AllArgsConstructor
public class CountryController {
    private ICountryService countryService;
    @GetMapping("/countries")
    public List<Country> getAllCountries(){
        return countryService.getAllCountries();
    }
}
