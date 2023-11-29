package com.example.case_study_module_5_spring.controller;

import com.example.case_study_module_5_spring.dto.ContractDto;
import com.example.case_study_module_5_spring.model.Contract;
import com.example.case_study_module_5_spring.service.IContractService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/contracts")
public class ContractController {
    @Autowired
    private IContractService contractService;

    @GetMapping("")
    public ResponseEntity<Page<Contract>> getAllContract(
            @RequestParam(name = "page", defaultValue = "0", required = false) Integer page,
            @RequestParam(name = "contractCode", defaultValue = "", required = false) String contractCode,
            @RequestParam(name = "size", defaultValue = "10", required = false) Integer size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Contract> contractPage = contractService.getAll(pageable, contractCode);
        if (contractPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(contractPage, HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<String> createContract(@RequestBody Contract contract){

        boolean status = contractService.save(contract);
        if (!status) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

