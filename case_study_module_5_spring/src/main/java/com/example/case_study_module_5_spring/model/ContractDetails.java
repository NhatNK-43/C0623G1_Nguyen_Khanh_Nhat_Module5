package com.example.case_study_module_5_spring.model;

import jakarta.persistence.*;

@Entity
@Table(name = "contract_details")
public class ContractDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "amount")
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "accompanied_service_id", referencedColumnName = "id")
    private AccompaniedService accompaniedService;

    @ManyToOne
    @JoinColumn(name = "contract_id", referencedColumnName = "id")
    private Contract contract;

    public ContractDetails() {
    }

    public ContractDetails(Integer id, Integer amount, AccompaniedService accompaniedService, Contract contract) {
        this.id = id;
        this.amount = amount;
        this.accompaniedService = accompaniedService;
        this.contract = contract;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public AccompaniedService getAccompaniedService() {
        return accompaniedService;
    }

    public void setAccompaniedService(AccompaniedService accompaniedService) {
        this.accompaniedService = accompaniedService;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }
}
