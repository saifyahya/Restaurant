package com.restaurantproject.restaurant.mapper;

import com.restaurantproject.restaurant.dto.CartOrderDto;
import com.restaurantproject.restaurant.model.CartOrder;

import java.util.List;
import java.util.stream.Collectors;

public class CartOrderMapper {

    public static List<CartOrderDto> toCartOrderDto(List<CartOrder> orders){
       return orders.stream().map(order->{
            CartOrderDto cartOrderDto = new CartOrderDto();
            cartOrderDto.setPrice(order.getPrice());
            cartOrderDto.setQuantity(order.getQuantity());
            cartOrderDto.setImage(order.getImage());
            cartOrderDto.setName(order.getName());
            return cartOrderDto;
       }).collect(Collectors.toList());
    }

    public static List<CartOrder> toCartOrder(List<CartOrderDto> orders){
        return orders.stream().map(order->{
            CartOrder cartOrder = new CartOrder();
            cartOrder.setPrice(order.getPrice());
            cartOrder.setQuantity(order.getQuantity());
            cartOrder.setImage(order.getImage());
            cartOrder.setName(order.getName());
            return cartOrder;
        }).collect(Collectors.toList());
    }
}
