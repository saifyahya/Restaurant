package com.restaurantproject.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.restaurantproject.restaurant.enums.CartStatusEnum;
import com.restaurantproject.restaurant.enums.CatEnumConverter;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name="cart")
@NoArgsConstructor
public class Cart  extends BaseEntity{

    @Convert(converter = CatEnumConverter.class)
    @Column(name = "status")
    private CartStatusEnum status;

    @Column(name = "code")
    @Lob
    private String code;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "price")
    private int price;


    @JsonIgnore
    @OneToMany(mappedBy = "cart",cascade = CascadeType.ALL)
    private List<CartOrder> cartOrders;

    @ManyToOne
    @JoinColumn(name = "client_id")
    @JsonIgnore
    private Client client;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "to_address_id",referencedColumnName = "id")
    private Address toAddress;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "from_address_id",referencedColumnName = "id")
    private Address fromAddress;

    public void addToCart(List<CartOrder> newCartOrders){
        if (cartOrders==null)
            cartOrders = new ArrayList<>();
        newCartOrders.forEach((o)->{
            cartOrders.add(o);
            o.setCart(this);
        });
    }

    public void generateCartCode(){
        this.code= UUID.randomUUID().toString();
    }

    @Override
    public String toString() {
        return "Cart{" +
                "status='" + status + '\'' +
                ", code='" + code + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                // Optionally include cartOrders size if you need some reference
                ", cartOrdersSize=" + (cartOrders != null ? cartOrders.size() : 0) +
                '}';
    }
}
