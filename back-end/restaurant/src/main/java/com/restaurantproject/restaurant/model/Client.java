package com.restaurantproject.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name="client")
@NoArgsConstructor

public class Client extends BaseEntity{
    @Column(name="full_name")
    private String  fullName;

    @Column(name="email")
    private String email;

    @Column(name="phone_number")
    private String phoneNumber;

    @OneToMany(mappedBy = "client" ,cascade = CascadeType.ALL)
    private List<Cart> carts;

    public void addToCarts(Cart cart){
        if (carts==null)
            carts= new ArrayList<>();
        carts.add(cart);
        cart.setClient(this);
    }
}
