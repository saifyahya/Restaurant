package com.restaurantproject.restaurant.service.jasperreport;

import com.restaurantproject.restaurant.model.Country;
import com.restaurantproject.restaurant.repository.CountryRepository;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import net.sf.jasperreports.engine.JasperFillManager;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class JasperReportService {
    @Autowired
    CountryRepository countryRepository;
    public String formatReport(String formatType) throws FileNotFoundException, JRException {
        List<Country> countryList = countryRepository.findAll();
        File file = ResourceUtils.getFile("classpath:countries.jrxml");
        net.sf.jasperreports.engine.JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(countryList);
        Map<String ,Object >parameters = new HashMap<>();
        parameters.put(" ","");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport,parameters, dataSource);

        if (formatType.equalsIgnoreCase("html")) {
            JasperExportManager.exportReportToHtmlFile(jasperPrint, "\\\\wsl.localhost\\Ubuntu\\home\\saifyahya\\restaurant\\back-end\\restaurant\\src\\main\\java\\com\\restaurantproject\\restaurant\\service\\jasperreport" + "\\countries.html");
        }
        if (formatType.equalsIgnoreCase("pdf")) {
            JasperExportManager.exportReportToPdfFile(jasperPrint, "\\\\wsl.localhost\\Ubuntu\\home\\saifyahya\\restaurant\\back-end\\restaurant\\src\\main\\java\\com\\restaurantproject\\restaurant\\service\\jasperreport" + "\\countries.pdf");
        }

        return "Report Generated";
    }
}
