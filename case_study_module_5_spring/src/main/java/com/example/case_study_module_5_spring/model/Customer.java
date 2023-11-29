package com.example.case_study_module_5_spring.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.GenerationType;

import jakarta.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", nullable = false, columnDefinition = "varchar(50)")
    private String name;

    @Column(name = "date_of_birth",nullable = false, columnDefinition = "date")
    private Date dateOfBirth;

    @Column (name = "gender", nullable = false, columnDefinition = "bit(1) default 1")
    private boolean gender;

    @Column (name = "id_card", nullable = false, columnDefinition = "varchar(50)")
    private String idCard;

    @Column (name = "phone_number", nullable = false, columnDefinition = "varchar(50)")
    private String phoneNumber;

    @Column (name = "email", nullable = false, columnDefinition = "varchar(50)")
    private String email;

    @Column (name = "address", nullable = false)
    private String address;

    @Column (name = "is_deleted", columnDefinition = "bit(1) default 0")
    private boolean deleted;

//    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "customer_type_id", referencedColumnName = "id")
    private CustomerType customerType;

    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private Set<Contract> contractSet;


    public Customer() {
    }

    public Customer(String name, Date dateOfBirth, boolean gender, String idCard, String phoneNumber, String email, String address,
                    boolean deleted, CustomerType customerType, Set<Contract> contractSet) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.idCard = idCard;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.deleted = deleted;
        this.customerType = customerType;
        this.contractSet = contractSet;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    public Set<Contract> getContractSet() {
        return contractSet;
    }

    public void setContractSet(Set<Contract> contractSet) {
        this.contractSet = contractSet;
    }
}
