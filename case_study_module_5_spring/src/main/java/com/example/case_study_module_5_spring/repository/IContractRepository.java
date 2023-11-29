package com.example.case_study_module_5_spring.repository;

import com.example.case_study_module_5_spring.model.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IContractRepository extends JpaRepository<Contract, Integer> {
    Page<Contract> findAllByContractCodeContaining(Pageable pageable, String contractCode);
}
