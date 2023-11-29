package com.example.case_study_module_5_spring.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.sql.Date;
import java.util.Set;


@Entity
@Table(name = "contracts")
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "contract_code", nullable = false, unique = true, columnDefinition = "varchar(50)")
    private String contractCode;

    @Column(name = "start_date", nullable = false, columnDefinition = "date")
    private Date startDate;

    @Column(name = "end_date", nullable = false, columnDefinition = "date")
    private Date endDate;

    @Column(name = "total_payment", nullable = false)
    private Double totalPayment;

    @Column(name = "deposit")
    private Double deposit;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "facility_id", referencedColumnName = "id")
    private Facility facility;

    @JsonBackReference
    @OneToMany(mappedBy = "contract")
    private Set<ContractDetails> contractDetailsSet;

    public Contract() {
    }

    public Contract(String contractCode, Date startDate, Date endDate, Double totalPayment, Double deposit, Customer customer,
                    Facility facility) {
        this.contractCode = contractCode;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPayment = totalPayment;
        this.deposit = deposit;
        this.customer = customer;
        this.facility = facility;
    }
    public Contract(String contractCode, Date startDate, Date endDate, Double totalPayment, Double deposit, Customer customer,
                    Facility facility, Set<ContractDetails> contractDetailsSet) {
        this.contractCode = contractCode;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPayment = totalPayment;
        this.deposit = deposit;
        this.customer = customer;
        this.facility = facility;
        this.contractDetailsSet = contractDetailsSet;
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

    public Set<ContractDetails> getContractDetailsSet() {
        return contractDetailsSet;
    }

    public void setContractDetailsSet(Set<ContractDetails> contractDetailsSet) {
        this.contractDetailsSet = contractDetailsSet;
    }
}
