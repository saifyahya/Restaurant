package com.restaurantproject.restaurant.service;

import com.restaurantproject.restaurant.model.MyOrder;


import java.util.List;
import java.util.Optional;

public interface IOrderService {
    List<MyOrder> getAllOrders(int page, int size);
    List<MyOrder> getOrdersByCategoryId(long id, int page, int size);

    List<MyOrder> getOrdersByOrderNameContaining(String orderName, int page , int size);

     MyOrder getOrderById(long id);

     long getCountOfAllOrders();

     long getCountOfOrdersByCategoryId(long id);

     long getCountOfOrdersContainingName(String name);
}
