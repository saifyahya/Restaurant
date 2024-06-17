package com.restaurantproject.restaurant.service;

import com.restaurantproject.restaurant.dto.CartDto;
import com.restaurantproject.restaurant.dto.PurchaseRequestDto;
import com.restaurantproject.restaurant.model.Cart;

import java.util.List;

public interface IPurchaseService {
    CartDto savePurchaseRequest(PurchaseRequestDto purchaseRequest);

     List<CartDto> getCartsByClientEmail(String email);

     boolean deleteCartByCode(String code);

    void deleteClient(long id);
}
