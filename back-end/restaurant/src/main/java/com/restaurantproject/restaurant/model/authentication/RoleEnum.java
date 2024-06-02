package com.restaurantproject.restaurant.model.authentication;

import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;

@Getter
public enum RoleEnum {
    USER("user"),
    ADMIN("admin");

    private String roleName;

    RoleEnum(String roleName) {
        this.roleName = roleName;
    }

    public static String fromEnum(RoleEnum roleEnum){
        return roleEnum.roleName;
    }

    public static RoleEnum toEnum(String roleName){
        return Arrays.stream(RoleEnum.values()).filter(e->e.getRoleName().equals(roleName)).findFirst().get();
    }

}
