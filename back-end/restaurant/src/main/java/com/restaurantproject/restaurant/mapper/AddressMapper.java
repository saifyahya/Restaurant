package com.restaurantproject.restaurant.mapper;

import com.restaurantproject.restaurant.dto.AddressDto;
import com.restaurantproject.restaurant.model.Address;

public class AddressMapper {

    public static AddressDto toAddressDto(Address address){
        AddressDto addressDto = new AddressDto();
        addressDto.setCountry(address.getCountry());
        addressDto.setState(address.getState());
        addressDto.setZipCode(address.getZipCode());
        return addressDto;
    }

    public static Address toAddress(AddressDto addressDto){
        Address address = new Address();
        address.setCountry(addressDto.getCountry());
        address.setState(addressDto.getState());
        address.setZipCode(addressDto.getZipCode());
        return address;
    }
}
