package com.restaurantproject.restaurant.enums;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class CatEnumConverter implements AttributeConverter<CartStatusEnum,String> {
    @Override
    public String convertToDatabaseColumn(CartStatusEnum cartStatusEnum) {
        if(cartStatusEnum==null)
            return null;
        return cartStatusEnum.getValue();
    }

    @Override
    public CartStatusEnum convertToEntityAttribute(String s) {
        if (s==null)
            return null;
        try {
            return CartStatusEnum.fromValue(s);
        } catch (IllegalAccessException e) {
            throw new RuntimeException(e);
        }
    }
}
