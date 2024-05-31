package com.restaurantproject.restaurant.service;

import com.restaurantproject.restaurant.dto.CartDto;
import com.restaurantproject.restaurant.dto.PurchaseRequestDto;
import com.restaurantproject.restaurant.model.Cart;

import java.util.List;

public interface IPurchaseService {
    String savePurchaseRequest(PurchaseRequestDto purchaseRequest);

     List<CartDto> getCartsByClientEmail(String email);

     void deleteCartByCode(String code);

    void deleteClient(long id);
}
