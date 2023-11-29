package com.example.case_study_module_5_spring.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "accompanied_service")
public class AccompaniedService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false, unique = true, columnDefinition = "varchar(50)")
    private String name;

    @Column(name = "unit", nullable = false, columnDefinition = "varchar(50)")
    private String unit;

    @Column(name = "price", nullable = false)
    private Double price;

    @JsonBackReference
    @OneToMany(mappedBy = "accompaniedService")
    private Set<ContractDetails> contractDetailsSet;

    public AccompaniedService() {
    }

    public AccompaniedService(String name, String unit, Double price, Set<ContractDetails> contractDetailsSet) {
        this.name = name;
        this.unit = unit;
        this.price = price;
        this.contractDetailsSet = contractDetailsSet;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Set<ContractDetails> getContractDetailsSet() {
        return contractDetailsSet;
    }

    public void setContractDetailsSet(Set<ContractDetails> contractDetailsSet) {
        this.contractDetailsSet = contractDetailsSet;
    }
}
