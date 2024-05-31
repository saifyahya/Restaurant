package com.restaurantproject.restaurant.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "country")
public class Country extends PublicData{
    @Column(name = "code")
    private String code;

    @OneToMany(mappedBy = "country")
    private Set<State> states;
}
