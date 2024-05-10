package com.restaurantproject.restaurant.controller;

import com.restaurantproject.restaurant.model.MyOrder;
import com.restaurantproject.restaurant.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path="/api")
@RestController
@CrossOrigin("http://127.0.0.1:4200")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @GetMapping("/allOrders")
    public List<MyOrder> getAllOrders(@RequestParam int page, @RequestParam int size){
        return orderService.getAllOrders(page, size);
    }

    @GetMapping("/category")
    public List<MyOrder> getOrdersByCategoryId(@RequestParam long id, @RequestParam int page, @RequestParam int size){
        return orderService.getOrdersByCategoryId(id,page, size);
    }

    @GetMapping("/orders")
    public List<MyOrder> getAllOrdersByName(@RequestParam String name,@RequestParam int page, @RequestParam int size) {
        return orderService.getOrdersByOrderNameContaining(name, page, size);
    }
    @GetMapping("/orders/{id}")
    public MyOrder getOrderById(@PathVariable long id) {
            return orderService.getOrderById(id);
}


    @GetMapping("/orders/count")
    public long getOrdersCount() {
        return orderService.getCountOfAllOrders();
    }

    @GetMapping("/orders/count/{id}")
    public long getOrdersCountByCategoryId(@PathVariable long id) {
        return orderService.getCountOfOrdersByCategoryId(id);
    }

    @GetMapping("/orders/count/name")
    public long getOrdersCountByNameContaining(@RequestParam String name) {
        return orderService.getCountOfOrdersContainingName(name);
    }


}
