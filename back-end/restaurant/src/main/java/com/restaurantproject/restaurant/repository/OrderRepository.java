package com.restaurantproject.restaurant.repository;

import com.restaurantproject.restaurant.model.MyOrder;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface OrderRepository extends JpaRepository<MyOrder,Long> {

    List<MyOrder> findByCategoryId(long id, Pageable pageable);

    List<MyOrder> findByOrderNameContaining(String orderName, Pageable pageable);

    //@Query("select count(id) from MyOrder where MyOrder.name= ?1" )
    long countByCategoryId(long id);

    //@Query("select count(id) from MyOrder where name Like %?1%" )
    long countByOrderNameContaining(String orderName);

}
