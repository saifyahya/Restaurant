package com.restaurantproject.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name="my_order")
public class MyOrder extends BaseEntity{
    @Column(name = "order_name")
    private String orderName;
    @Column(name = "image")
    private String image;
    @Column(name = "description")
    @Lob
    private String description;
    @Column(name = "price")
    private int price;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
