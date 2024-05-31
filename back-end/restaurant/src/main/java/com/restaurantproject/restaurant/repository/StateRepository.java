package com.restaurantproject.restaurant.repository;

import com.restaurantproject.restaurant.model.State;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.function.Function;

public interface StateRepository extends JpaRepository<State,Long> {
    List<State> findAllByCountryName(String name);
}
