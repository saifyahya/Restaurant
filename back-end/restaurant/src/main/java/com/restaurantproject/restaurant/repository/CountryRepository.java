package com.restaurantproject.restaurant.repository;

import com.restaurantproject.restaurant.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country,Long> {
}
