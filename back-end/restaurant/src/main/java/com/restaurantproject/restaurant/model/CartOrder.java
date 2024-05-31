package com.restaurantproject.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="cart_order")
@NoArgsConstructor
public class CartOrder extends BaseEntity{
    @Column(name="name")
    private String name;
    @Column(name="image")
    private String image;

    @Column(name="quantity")
    private int quantity;

    @Column(name="price")
    private int price;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @Override
    public String toString() {
        return "CartOrder{" +
                "name='" + name + '\'' +
                ", image='" + image + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}
