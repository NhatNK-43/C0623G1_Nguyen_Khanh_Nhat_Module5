package com.example.case_study_module_5_spring.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "facilities")
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false, unique = true, columnDefinition = "varchar(150)")
    private String name;

    @Column(name = "area", nullable = false)
    private Double area;

    @Column(name = "rental_cost", nullable = false)
    private Double rentalCost;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @Column(name = "path_image", nullable = false)
    private String pathImage;

    @ManyToOne
    @JoinColumn(name = "rental_type_id", referencedColumnName = "id")
    private RentalType rentalType;

    @ManyToOne
    @JoinColumn(name = "facility_type_id", referencedColumnName = "id")
    private FacilityType facilityType;

    @ManyToOne
    @JoinColumn(name = "room_standard_id", referencedColumnName = "id")
    private RoomStandard roomStandard;

    @Column(name = "other_utility")
    private String otherUtility;

    @Column(name = "pool_area")
    private Double poolArea;

    @Column(name = "number_floor")
    private Integer numberFloor;

    @Column(name = "free_service")
    private String freeService;

    @Column(name = "is_delete", columnDefinition = "bit(1) default 0")
    private boolean delete;

    @JsonBackReference
    @OneToMany(mappedBy = "facility")
    private Set<Contract> contractSet;

    public Facility() {
    }

    public Facility(String name, Double area, Double rentalCost, Integer capacity, String pathImage, RentalType rentalType,
                    FacilityType facilityType, RoomStandard roomStandard, String otherUtility, Double poolArea, Integer numberFloor,
                    String freeService, boolean delete, Set<Contract> contractSet) {
        this.name = name;
        this.area = area;
        this.rentalCost = rentalCost;
        this.capacity = capacity;
        this.pathImage = pathImage;
        this.rentalType = rentalType;
        this.facilityType = facilityType;
        this.roomStandard = roomStandard;
        this.otherUtility = otherUtility;
        this.poolArea = poolArea;
        this.numberFloor = numberFloor;
        this.freeService = freeService;
        this.delete = delete;
        this.contractSet = contractSet;
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

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Double getRentalCost() {
        return rentalCost;
    }

    public void setRentalCost(Double rentalCost) {
        this.rentalCost = rentalCost;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getPathImage() {
        return pathImage;
    }

    public void setPathImage(String pathImage) {
        this.pathImage = pathImage;
    }

    public RentalType getRentalType() {
        return rentalType;
    }

    public void setRentalType(RentalType rentalType) {
        this.rentalType = rentalType;
    }

    public FacilityType getFacilityType() {
        return facilityType;
    }

    public void setFacilityType(FacilityType facilityType) {
        this.facilityType = facilityType;
    }

    public RoomStandard getRoomStandard() {
        return roomStandard;
    }

    public void setRoomStandard(RoomStandard roomStandard) {
        this.roomStandard = roomStandard;
    }

    public String getOtherUtility() {
        return otherUtility;
    }

    public void setOtherUtility(String otherUtility) {
        this.otherUtility = otherUtility;
    }

    public Double getPoolArea() {
        return poolArea;
    }

    public void setPoolArea(Double poolArea) {
        this.poolArea = poolArea;
    }

    public Integer getNumberFloor() {
        return numberFloor;
    }

    public void setNumberFloor(Integer numberFloor) {
        this.numberFloor = numberFloor;
    }

    public String getFreeService() {
        return freeService;
    }

    public void setFreeService(String freeService) {
        this.freeService = freeService;
    }

    public boolean isDelete() {
        return delete;
    }

    public void setDelete(boolean delete) {
        this.delete = delete;
    }
}
