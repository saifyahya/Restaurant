package com.restaurantproject.restaurant.service.impl;

import com.restaurantproject.restaurant.model.Category;
import com.restaurantproject.restaurant.repository.CategoryRepository;
import com.restaurantproject.restaurant.service.ICategoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements ICategoryService {
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}
