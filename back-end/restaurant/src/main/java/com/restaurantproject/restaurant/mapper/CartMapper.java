package com.restaurantproject.restaurant.mapper;

import com.restaurantproject.restaurant.dto.CartDto;
import com.restaurantproject.restaurant.model.Cart;

public class CartMapper {

    public static Cart toCart(CartDto cartDto){
        Cart cart = new Cart();
        cart.setCode(cartDto.getCode());
        cart.setPrice(cartDto.getPrice());
        cart.setQuantity(cartDto.getQuantity());
        cart.setStatus(cartDto.getStatus());
return cart;
    }

    public static CartDto toCartDto(Cart cart){
        CartDto cartDto = new CartDto();
        cartDto.setCode(cart.getCode());
        cartDto.setPrice(cart.getPrice());
        cartDto.setQuantity(cart.getQuantity());
        cartDto.setStatus(cart.getStatus());
        cartDto.setUpdatedDate(cart.getUpdatedAt());
        return cartDto;
    }
}
