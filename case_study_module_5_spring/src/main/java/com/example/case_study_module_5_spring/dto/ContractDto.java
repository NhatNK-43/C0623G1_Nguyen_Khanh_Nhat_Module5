package com.example.case_study_module_5_spring.dto;

import com.example.case_study_module_5_spring.model.Customer;
import com.example.case_study_module_5_spring.model.Facility;

import java.sql.Date;


public class ContractDto {

    private Integer id;

    private String contractCode;

    private Date startDate;

    private Date endDate;

    private Double totalPayment;

    private Double deposit;

    private Customer customer;

    private Facility facility;

    public ContractDto(Integer id, String contractCode, Date startDate, Date endDate, Double totalPayment, Double deposit, Customer customer, Facility facility) {
        this.id = id;
        this.contractCode = contractCode;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPayment = totalPayment;
        this.deposit = deposit;
        this.customer = customer;
        this.facility = facility;
    }

    public ContractDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContractCode() {
        return contractCode;
    }

    public void setContractCode(String contractCode) {
        this.contractCode = contractCode;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Double getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(Double totalPayment) {
        this.totalPayment = totalPayment;
    }

    public Double getDeposit() {
        return deposit;
    }

    public void setDeposit(Double deposit) {
        this.deposit = deposit;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }
}
