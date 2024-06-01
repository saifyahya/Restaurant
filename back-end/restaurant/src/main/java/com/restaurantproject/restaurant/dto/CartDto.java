package com.restaurantproject.restaurant.dto;

import com.restaurantproject.restaurant.enums.CartStatusEnum;
import com.restaurantproject.restaurant.enums.CatEnumConverter;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
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
