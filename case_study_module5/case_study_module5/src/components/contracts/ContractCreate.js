import {NavLink, useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useEffect, useState} from "react";
import * as contractService from "../../services/contractService";
import * as customerService from "../../services/customerService";
import * as facilityService from "../../services/facilityService";
import * as Yup from "yup"
import {toast} from "react-toastify";

export function ContractCreate() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        getAllCustomer();
        getAllFacility();
    }, []);

    const getAllFacility = async () => {
        const data = await facilityService.getAll();
        setFacilities(data);
    }

    const getAllCustomer = async () => {
        const data = await customerService.getAll();
        setFacilities(data);
    }

    if (!customers || !facilities) {
        return null;
    }

    const initValue = {
        contractCode: "",
        customer: {},
        facility: {},
        startDate: "",
        endDate: "",
        totalPayment: 0,
        deposit: 0
    }

    const validateObject = {
        contractCode: Yup.string()
            .required("Please enter a contract code")
            .matches(/HD-[0-9]{4}/, "The contract code entered is invalid"),
        customer: Yup.string()
            .required("Please enter a customer name"),
        facility: Yup.string()
            .required("Please select a facility name"),
        startDate: Yup.date()
            .required("Please enter a facility name")
            .min(new Date(), "The start date must be greater than or equal to the current date"),
        endDate: Yup.date()
            .required("Please enter a facility name")
            .min(new Date(), "The start date must be greater than or equal to the start date"),
        deposit: Yup.number()
            .min(0, "The deposit must be greater than or equal 0")
    }

    const create = async (values) => {
        const status = await contractService.create(values)
        if (status === 201) {
            toast.success("Create contract successfully!");
            navigate("/contracts")
        } else {
            toast.error("Create contract failed!");
        }
    }

    return (
        <>
            <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6 border-primary">
                    <div className=" text-content">
                        <h2 className="text-primary">Create Contract</h2>
                    </div>
                    <Formik
                        initialValues={initValue}
                        onSubmit={values => {
                            create(values);
                        }}
                        validationSchema={Yup.object(validateObject)}
                    >
                        <Form>
                            <div className="row mb-3">
                                <label htmlFor="name" className="form-label col-sm-2">Contract code</label>
                                <div className="col-sm-10">
                                    <Field type="text" id="name" className="form-control" required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="customer" className="form-label col-sm-2">Customer</label>
                                <div className="col-sm-10">
                                    <Field type="text" id="customer" className="form-control"/>
                                    <datalist id="datalistCustomers">
                                        <option value=""></option>
                                        {
                                            customers.map(customer => (
                                                <option key={customer.id} value={JSON.stringify(customer)}>
                                                    {customer.name}
                                                </option>
                                            ))
                                        }
                                    </datalist>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="facility" className="form-label col-sm-2">Facility</label>
                                <div className="col-sm-10">
                                    <Field as="select" id="facility" className="form-control"/>
                                    <option value="">Select</option>
                                    {
                                        facilities.map(facility => (
                                            <option key={facility.id} value={JSON.stringify(facility)}>
                                                {facility.name}
                                            </option>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="startDate" className="form-label col-sm-2">Start date</label>
                                <div className="col-sm-10">
                                    <Field type="date" id="startDate" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="endDate" className="form-label col-sm-2">End date</label>
                                <div className="col-sm-10">
                                    <Field type="date" id="endDate" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="totalPayment" className="form-label col-sm-2">Total payment</label>
                                <div className="col-sm-10">
                                    <Field type="number" id="totalPayment" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="deposit" className="form-label col-sm-2">Deposit</label>
                                <div className="col-sm-10">
                                    <Field type="number" id="deposit" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="form-label col-sm-2"></label>
                                <div className="col-sm-10">
                                    <NavLink to="/contracts" role="button"
                                             className="btn btn-sm btn-secondary">Back</NavLink>
                                    <button type="submit" className="btn btn-sm btn-primary ms-3">Save</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    )
}