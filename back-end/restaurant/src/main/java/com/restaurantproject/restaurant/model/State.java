package com.restaurantproject.restaurant.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "state")

public class State extends PublicData{

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;
}
