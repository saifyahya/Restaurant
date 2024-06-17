package com.restaurantproject.restaurant.dto;

import com.restaurantproject.restaurant.enums.CartStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartDto {
    private CartStatusEnum status;
    private String code;
    private int quantity;
    private int price;
   private List<CartOrderDto> cartOrdersDto;
    private AddressDto toAddressDto;
    private AddressDto fromAddressDto;
    private Date updatedDate;
}
