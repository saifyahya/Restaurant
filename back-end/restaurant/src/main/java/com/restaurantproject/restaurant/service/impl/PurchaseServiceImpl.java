package com.restaurantproject.restaurant.service.impl;

import com.restaurantproject.restaurant.dto.CartDto;
import com.restaurantproject.restaurant.dto.PurchaseRequestDto;
import com.restaurantproject.restaurant.enums.CartStatusEnum;
import com.restaurantproject.restaurant.exceptions.ResourceNotFoundException;
import com.restaurantproject.restaurant.mapper.AddressMapper;
import com.restaurantproject.restaurant.mapper.CartMapper;
import com.restaurantproject.restaurant.mapper.CartOrderMapper;
import com.restaurantproject.restaurant.mapper.ClientMapper;
import com.restaurantproject.restaurant.model.Address;
import com.restaurantproject.restaurant.model.Cart;
import com.restaurantproject.restaurant.model.CartOrder;
import com.restaurantproject.restaurant.model.Client;
import com.restaurantproject.restaurant.repository.CartRepository;
import com.restaurantproject.restaurant.repository.ClientRepository;
import com.restaurantproject.restaurant.service.IPurchaseService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PurchaseServiceImpl implements IPurchaseService {
    private ClientRepository clientRepository;
    private CartRepository cartRepository;

    @Override
    @Transactional
    public String savePurchaseRequest(PurchaseRequestDto purchaseRequest) {
        System.out.println(purchaseRequest);
        Client client = ClientMapper.toClient(purchaseRequest.getClientDto());
        Cart cart = CartMapper.toCart(purchaseRequest.getCartDto());
        List<CartOrder> orders = CartOrderMapper.toCartOrder(purchaseRequest.getCartOrdersDto());
        Address toAddress = AddressMapper.toAddress(purchaseRequest.getToAddressDto());
        Address fromAddress = AddressMapper.toAddress(purchaseRequest.getFromAddressDto());

        cart.addToCart(orders);
        cart.setFromAddress(fromAddress);
        cart.setToAddress(toAddress);
        cart.setStatus(CartStatusEnum.UNPAID);
        cart.generateCartCode();
        client.addToCarts(cart);
        clientRepository.save(client);

        return cart.getCode();

    }

    @Override
    public List<CartDto> getCartsByClientEmail(String email) {
        List<Cart> carts = cartRepository.findAllByClientEmail(email);
        if (carts == null || carts.isEmpty()) {
            throw new ResourceNotFoundException("Cart", "Client email", email);
        }
        List<CartDto> cartsDto = carts.stream().map(this::mapToCartDto).collect(Collectors.toList());
        return cartsDto;
    }

    @Override
    public void deleteCartByCode(String code) {
        Cart cart = cartRepository.findByCode(code).orElseThrow(() -> new ResourceNotFoundException("Cart", "Cart code", code));
        cartRepository.deleteById(cart.getId());

    }

    private CartDto mapToCartDto(Cart cart) {
        CartDto cartDto = CartMapper.toCartDto(cart);
        cartDto.setToAddressDto(AddressMapper.toAddressDto(cart.getToAddress()));
        cartDto.setFromAddressDto(AddressMapper.toAddressDto(cart.getFromAddress()));
        cartDto.setCartOrdersDto(CartOrderMapper.toCartOrderDto(cart.getCartOrders()));
        return cartDto;
    }

    @Override
    public void deleteClient(long id) {
        Client client = clientRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Client", "Client Id", "" + id));
        clientRepository.delete(client);
    }
}
