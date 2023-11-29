package com.example.case_study_module_5_spring.service.impl;

import com.example.case_study_module_5_spring.model.Contract;
import com.example.case_study_module_5_spring.repository.IContractRepository;
import com.example.case_study_module_5_spring.service.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ContractService implements IContractService {
    @Autowired
    private IContractRepository contractRepository;
    @Override
    public Page<Contract> getAll(Pageable pageable, String contractCode) {
        return contractRepository.findAllByContractCodeContaining(pageable, contractCode);
    }

    @Override
    public boolean save(Contract contract) {
        try {
            contractRepository.save(contract);
        } catch (Exception e){
            return false;
        }
        return true;
    }
}
