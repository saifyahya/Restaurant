package com.restaurantproject.restaurant.mapper;

import com.restaurantproject.restaurant.dto.ClientDto;
import com.restaurantproject.restaurant.model.Client;

public class ClientMapper {

    public static ClientDto ToClientDto (Client client){
        return new ClientDto(client.getFullName(), client.getEmail(), client.getPhoneNumber());
    }

    public static Client toClient(ClientDto clientDto){
        Client client= new Client();
        client.setFullName(clientDto.getFullName());
        client.setEmail(clientDto.getEmail());
        client.setPhoneNumber(clientDto.getPhoneNumber());
        return client;
    }
}
