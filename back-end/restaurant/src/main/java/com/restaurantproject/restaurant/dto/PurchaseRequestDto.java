package com.restaurantproject.restaurant.dto;

import com.restaurantproject.restaurant.model.Address;
import com.restaurantproject.restaurant.model.Cart;
import com.restaurantproject.restaurant.model.CartOrder;
import com.restaurantproject.restaurant.model.Client;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PurchaseRequestDto {
    private ClientDto clientDto;
    private List<CartOrderDto> cartOrdersDto;
    private CartDto cartDto;
    private AddressDto toAddressDto;
    private AddressDto fromAddressDto;

}
