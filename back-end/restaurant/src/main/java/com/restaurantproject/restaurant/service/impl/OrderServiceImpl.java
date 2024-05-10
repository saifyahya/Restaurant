package com.restaurantproject.restaurant.service.impl;

import com.restaurantproject.restaurant.model.MyOrder;
import com.restaurantproject.restaurant.repository.OrderRepository;
import com.restaurantproject.restaurant.service.IOrderService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements IOrderService {
    private OrderRepository orderRepository;

    @Override
    public List<MyOrder> getAllOrders(int page, int size) {
        Pageable pageable = PageRequest.of(page,size);
       List<MyOrder> orders =  orderRepository.findAll(pageable).getContent();   // find all always return list , either empty or has data
        return  orders;
    }

    @Override
    public List<MyOrder> getOrdersByCategoryId(long id,int page, int size) {
        Pageable pageable = PageRequest.of(page,size);
        return  orderRepository.findByCategoryId(id,pageable);
    }

    @Override
    public List<MyOrder> getOrdersByOrderNameContaining(String orderName,int page, int size) {
        Pageable pageable = PageRequest.of(page,size);
        return orderRepository.findByOrderNameContaining(orderName,pageable);
    }

    @Override
    public MyOrder getOrderById(long id) {
        Optional<MyOrder> retrievedOrder = orderRepository.findById(id);
        if(!retrievedOrder.isPresent()){
            throw new RuntimeException("Resources Not Found Exception: no order with id = "+id);
        }
        return retrievedOrder.get();
    }

    @Override
    public long getCountOfAllOrders() {
        return orderRepository.count();
    }

    @Override
    public long getCountOfOrdersByCategoryId(long id) {
        return orderRepository.countByCategoryId(id);
    }

    @Override
    public long getCountOfOrdersContainingName(String name) {
        return orderRepository.countByOrderNameContaining(name);
    }
}
