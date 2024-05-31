package com.restaurantproject.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartOrderDto {

    private String name;
    private String image;
    private int quantity;
    private int price;
}
