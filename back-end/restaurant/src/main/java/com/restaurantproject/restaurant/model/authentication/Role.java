package com.restaurantproject.restaurant.model.authentication;

import com.restaurantproject.restaurant.model.BaseEntity;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Role extends BaseEntity {

    @Convert(converter = RoleEnumConverter.class)
    private RoleEnum role;

    @ManyToMany(mappedBy = "roles")
    Set<User> users;
}
