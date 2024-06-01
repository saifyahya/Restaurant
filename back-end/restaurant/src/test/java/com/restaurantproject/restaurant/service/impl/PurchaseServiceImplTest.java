//package com.restaurantproject.restaurant.service.impl;
//
//import com.restaurantproject.restaurant.dto.*;
//import com.restaurantproject.restaurant.enums.CartStatusEnum;
//import com.restaurantproject.restaurant.mapper.AddressMapper;
//import com.restaurantproject.restaurant.mapper.CartMapper;
//import com.restaurantproject.restaurant.mapper.CartOrderMapper;
//import com.restaurantproject.restaurant.mapper.ClientMapper;
//import com.restaurantproject.restaurant.model.Address;
//import com.restaurantproject.restaurant.model.Cart;
//import com.restaurantproject.restaurant.model.CartOrder;
//import com.restaurantproject.restaurant.model.Client;
//import com.restaurantproject.restaurant.repository.ClientRepository;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.mockito.MockitoAnnotations;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class PurchaseServiceImplTest {
//
//    @InjectMocks
//    private PurchaseServiceImpl purchaseService;
//
//
//    @Mock
//    private ClientRepository clientRepository;
//    @Mock
//    private ClientMapper clientMapper;
//    @Mock
//    private AddressMapper addressMapper;
//    @Mock
//    private CartMapper cartMapper;
//    @Mock
//    private CartOrderMapper cartOrderMapper;
//
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.openMocks(this);
//    }
//
//    @Test
//    void savePurchaseRequest() {
//        AddressDto addressDto = new AddressDto("Jordan", "Amman", "9114");
//        CartOrderDto cartOrderDto = new CartOrderDto("Burger", "", 2, 50);
//        CartDto cartDto = new CartDto(
//                CartStatusEnum.UNPAID,
//                "112",
//                2,
//                100,
//                List.of(cartOrderDto),
//                addressDto,
//                addressDto,
//                new Date()
//        );
//        ClientDto clientDto = new ClientDto("saif", "saif@gmail.com", "");
//        PurchaseRequestDto purchaseRequestDto = new PurchaseRequestDto(
//                clientDto,
//                List.of(cartOrderDto),
//                cartDto,
//                addressDto,
//                addressDto
//        );
//
//        // Create mock objects
//        Client mockClient = new Client();
//        Cart mockCart = new Cart();
//        Address mockAddress = new Address();
//        List<CartOrder> mockCartOrders = List.of(new CartOrder());
//
//        // Stubbing the behavior of mock objects
//        Mockito.when(clientMapper.toClient(clientDto)).thenReturn(mockClient);
//        Mockito.when(cartMapper.toCart(cartDto)).thenReturn(mockCart);
//        Mockito.when(addressMapper.toAddress(addressDto)).thenReturn(mockAddress);
//        Mockito.when(cartOrderMapper.toCartOrder(List.of(cartOrderDto))).thenReturn(mockCartOrders);
//        Mockito.when(clientRepository.save(mockClient)).thenReturn(mockClient);
//
//        // Call the service method
//        CartDto resultCartDto = purchaseService.savePurchaseRequest(purchaseRequestDto);
//
//        // Verify the results
//        Assertions.assertEquals(CartStatusEnum.UNPAID, resultCartDto.getStatus());
//        Assertions.assertNull(resultCartDto.getCode());
//    }
//
//
//}