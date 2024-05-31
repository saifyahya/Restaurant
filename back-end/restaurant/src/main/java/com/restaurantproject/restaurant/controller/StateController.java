package com.restaurantproject.restaurant.controller;

import com.restaurantproject.restaurant.model.State;
import com.restaurantproject.restaurant.service.IStateService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("http://127.0.0.1:4200")
@RequestMapping("/api")
@AllArgsConstructor
public class StateController {
 private IStateService stateService;

    @GetMapping("/states")
    public List<State> getAllStates(){
        return stateService.getAllStates();
    }

    @GetMapping("/states/{name}")
    public List<State> getStatesByCountry(@PathVariable String name){
        return stateService.getStatesByCountryName(name);
    }

}
