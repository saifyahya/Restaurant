package com.restaurantproject.restaurant.configuration;

import com.restaurantproject.restaurant.model.Category;
import com.restaurantproject.restaurant.model.MyOrder;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

public class RestConfiguration implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
disableRestApis(MyOrder.class,config);
        disableRestApis(Category.class,config);
    }

    private void disableRestApis(Class theClass, RepositoryRestConfiguration config){
        HttpMethod[] httpMethod = {HttpMethod.DELETE,HttpMethod.GET,HttpMethod.GET,HttpMethod.POST,HttpMethod.PUT};
        config.getExposureConfiguration().forDomainType(theClass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(httpMethod)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(httpMethod)));
    }
}
