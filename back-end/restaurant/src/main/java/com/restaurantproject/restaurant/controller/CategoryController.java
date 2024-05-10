package com.restaurantproject.restaurant.controller;

import com.restaurantproject.restaurant.model.Category;
import com.restaurantproject.restaurant.service.ICategoryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RequestMapping(path = "/api")
@RestController
@AllArgsConstructor
@CrossOrigin("http://127.0.0.1:4200")
public class CategoryController {
    private ICategoryService categoryService;

    @GetMapping("/allCategories")
    public List<Category>  getAllCategories(){
        return categoryService.getAllCategories();
    }


}
