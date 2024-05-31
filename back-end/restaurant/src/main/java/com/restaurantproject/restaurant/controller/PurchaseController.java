package com.restaurantproject.restaurant.controller;

import com.restaurantproject.restaurant.dto.CartDto;
import com.restaurantproject.restaurant.dto.PurchaseRequestDto;
import com.restaurantproject.restaurant.dto.PurchaseResponseDto;
import com.restaurantproject.restaurant.enums.CartStatusEnum;
import com.restaurantproject.restaurant.model.Cart;
import com.restaurantproject.restaurant.service.IPurchaseService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://127.0.0.1:4200")
@AllArgsConstructor
public class PurchaseController {
    private IPurchaseService purchaseService;

    @PostMapping("/purchase")
    public ResponseEntity<PurchaseResponseDto> savePurchaseRequest(@RequestBody PurchaseRequestDto purchaseRequest){
        System.out.println("purchases"+purchaseRequest);
        String cartCode = purchaseService.savePurchaseRequest(purchaseRequest);
        PurchaseResponseDto response = new PurchaseResponseDto();
            response.setName(purchaseRequest.getClientDto().getFullName());
            response.setStatus(CartStatusEnum.UNPAID);
            response.setCode(cartCode);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/purchase")
    public List<CartDto> getCartsByClientEmail(@RequestParam String email){
return purchaseService.getCartsByClientEmail(email);
    }

    @DeleteMapping("/purchase")
    public void DeletePurchaseInfo(@RequestParam String code){
         purchaseService.deleteCartByCode(code);
    }
}
