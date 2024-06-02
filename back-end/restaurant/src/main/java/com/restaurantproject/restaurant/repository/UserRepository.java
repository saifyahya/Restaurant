package com.restaurantproject.restaurant.repository;

import com.restaurantproject.restaurant.model.authentication.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
