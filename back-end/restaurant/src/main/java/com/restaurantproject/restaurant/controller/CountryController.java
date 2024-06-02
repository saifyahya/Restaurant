package com.restaurantproject.restaurant.controller;

import com.restaurantproject.restaurant.model.Country;
import com.restaurantproject.restaurant.service.ICountryService;
import com.restaurantproject.restaurant.service.jasperreport.JasperReportService;
import lombok.AllArgsConstructor;
import net.sf.jasperreports.engine.JRException;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://127.0.0.1:4200")
@AllArgsConstructor
public class CountryController {
    private ICountryService countryService;

    private JasperReportService jasperReportService;
    @GetMapping("/countries")
    public List<Country> getAllCountries(){
        return countryService.getAllCountries();
    }

    @GetMapping("/countries/{format}")
    public String generateReport(@PathVariable String format) throws JRException, FileNotFoundException {
        return jasperReportService.formatReport(format);
    }
}
