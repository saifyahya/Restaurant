package com.restaurantproject.restaurant.dto;

import com.restaurantproject.restaurant.enums.CartStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseResponseDto {

    private String name;
    private String Code;
    private CartStatusEnum status;
}
