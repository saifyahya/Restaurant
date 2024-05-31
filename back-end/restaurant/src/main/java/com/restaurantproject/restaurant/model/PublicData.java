package com.restaurantproject.restaurant.model;

import jakarta.persistence.*;
import lombok.Data;

@MappedSuperclass
@Data
public class PublicData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String name;
}
