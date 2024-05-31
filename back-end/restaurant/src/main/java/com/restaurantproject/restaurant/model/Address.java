package com.restaurantproject.restaurant.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="address")
@NoArgsConstructor
public class Address extends BaseEntity{

    @Column(name="country")
    private String Country;

    @Column(name="state")
    private String State;

    @Column(name="zip_code")
    private String zipCode;

    @OneToOne
    @PrimaryKeyJoinColumn
    private Cart cart ;
}
