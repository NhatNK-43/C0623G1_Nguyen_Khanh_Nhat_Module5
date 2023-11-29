package com.example.case_study_module_5_spring.service;

import com.example.case_study_module_5_spring.model.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IContractService {
    Page<Contract> getAll(Pageable pageable, String contractCode);

    boolean save(Contract contract);
}
