package com.restaurantproject.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "category")
@Data
@NoArgsConstructor
public class Category extends BaseEntity{
    @Column(name="category_name")
    private String categoryName ;

    @Column(name="category_logo")
    private String logo ;

    @OneToMany(mappedBy = "category")

   private Set<MyOrder> orders ;


}
