package com.restaurantproject.restaurant.model.authentication;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)

public class RoleEnumConverter implements AttributeConverter<RoleEnum, String> {
    @Override
    public String convertToDatabaseColumn(RoleEnum roleEnum) {
        if(roleEnum==null)
            return null;
        return RoleEnum.fromEnum(roleEnum);   }

    @Override
    public RoleEnum convertToEntityAttribute(String s) {
        if(s==null)
            return null;
        return RoleEnum.toEnum(s);
    }
}
