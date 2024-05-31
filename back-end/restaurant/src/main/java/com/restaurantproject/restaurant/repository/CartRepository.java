package com.restaurantproject.restaurant.repository;

import com.restaurantproject.restaurant.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart,Long> {
    List<Cart> findAllByClientEmail(String email);

    Optional<Cart> findByCode(String code);
}
