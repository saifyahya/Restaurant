package com.restaurantproject.restaurant.enums;

public enum CartStatusEnum {
    UNPAID("unpaid"),

    INVALID("invalid"),
    PENDING("pending"),
    PAID("paid");
    private String status;

    public String getValue(){
        return this.status;
    }
    CartStatusEnum(String status){
        this.status=status;
    }

    public static CartStatusEnum fromValue(String value) throws IllegalAccessException {
        for(CartStatusEnum status: CartStatusEnum.values()){
            if(status.getValue().equals(value)){
                return status;
            }
        }
        throw new IllegalAccessException("Unknown status value "+value);
    }

}
