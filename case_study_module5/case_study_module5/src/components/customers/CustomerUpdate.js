import * as customerService from "../../service/customer_service"
import * as customerTypeService from "../../service/customer_type_service"
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import * as Yup from "yup"

export function CustomerUpdate() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [customerTypes, setCustomerTypes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getAllCustomerType();
    }, []);

    useEffect(() => {
        getCustomerById();
    }, [id]);

    const getCustomerById = async () => {
        let data = await customerService.getCustomerById(id);
        data.gender = "" + data.gender;
        setCustomer(data);
    }

    const getAllCustomerType = async () => {
        let data = await customerTypeService.getAllCustomerType();
        setCustomerTypes(data);
    }

    if (!customer || !customerTypes) {
        return null;
    }

    const initValue = {
        ...customer,
        customerType: JSON.stringify(customer.customerType)
    };

    console.log(customer);

    const d = new Date();
    const date = (d.getFullYear() - 18) + "-" + (d.getMonth() + 1) + "-" + d.getDate();

    const validateObject = {
        name: Yup.string()
            .required("Please enter your full name"),
        idCard: Yup.string()
            .required("Please enter your ID card")
            .matches(/^[0-9]{12}$|^[0-9]{9}$/, "The ID card entered is invalid"),
        dateOfBirth: Yup.date()
            .required("Please enter your date of birth")
            .min("1900-01-01", "Year of birth cannot be less than 1990")
            .max(date, "Your age must be greater than 18"),
        phoneNumber: Yup.string()
            .required("Please enter your phone number")
            .matches(/^0[0-9]{9}$/, "The phone number entered is invalid"),
        email: Yup.string()
            .required("Please enter your email")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "The email entered is invalid"),
        address: Yup.string()
            .required("Please enter your address")
    }

    const update = async (values) => {
        console.log(values)
        values.customerType = JSON.parse(values.customerType);
        let status = await customerService.updateCustomer(values);
        if (status === 200) {
            toast.success("Update successfully!");
            navigate("/customers");
        } else {
            toast.error("Update failed!");
            navigate("/customers/update/" + values.id);
        }
    }

    return (
        <>
            <div className="body">
                <div className="row m-0 pt-5">
                    <div className="col-md-3"/>
                    <div className="col-md-6 shadow p-0">
                        <div className="form-control p-5 rounded-0">
                            <div className="mb-5">
                                <h2 className="text-primary">Update Customer</h2>
                            </div>
                            <Formik
                                initialValues={initValue}
                                onSubmit={values => {
                                    update(values);

                                }}
                                validationSchema={Yup.object(validateObject)}
                            >
                                <Form>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="form-label col-sm-3">
                                            Name
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="name" name="name" className="form-control"
                                            />
                                            <ErrorMessage name="name" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="dateOfBirth" className="form-label col-sm-3">
                                            Date of birth
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="date"
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                className="form-control"

                                            />
                                            <ErrorMessage name="dateOfBirth" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>

                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3">
                                            Gender
                                        </label>
                                        <div className="col-sm-9">
                                            <div className="form-check form-check-inline">
                                                <Field className="form-check-input" type="radio" name="gender"
                                                       id="inlineRadio1"
                                                       value="true"/>
                                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <Field className="form-check-input" type="radio" name="gender"
                                                       id="inlineRadio2"
                                                       value="false"/>
                                                <label className="form-check-label"
                                                       htmlFor="inlineRadio2">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="idCard" className="form-label col-sm-3">
                                            Id card
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="idCard" name="idCard" className="form-control"
                                            />
                                            <ErrorMessage name="idCard" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="phoneNumber" className="form-label col-sm-3">
                                            Phone number
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className="form-control"

                                            />
                                            <ErrorMessage name="phoneNumber" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="email" className="form-label col-sm-3">
                                            Email
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="email" id="email" name="email" className="form-control"
                                            />
                                            <ErrorMessage name="email" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="address" className="form-label col-sm-3">
                                            Address
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="text"
                                                id="address"
                                                name="address"
                                                className="form-control"

                                            />
                                            <ErrorMessage name="address" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3" htmlFor="customerType">
                                            Customer type
                                        </label>
                                        <div className="col-sm-9">
                                            <Field as="select"
                                                   className="form-select"
                                                   aria-label="Default select example"
                                                   name="customerType"
                                                   id="customerType"
                                            >
                                                {
                                                    customerTypes.map((customerType) => (
                                                        <option
                                                            value={JSON.stringify(customerType)}
                                                            key={customerType.id}>
                                                            {customerType.name}</option>
                                                    ))
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3"/>
                                        <div className="col-sm-9">
                                            <NavLink
                                                to="/facilities"
                                                className="btn btn-sm btn-secondary me-4 rounded-0"
                                            >
                                                Back
                                            </NavLink>
                                            <button type="submit" className="btn btn-sm btn-primary rounded-0">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                </div>
            </div>
        </>
    )
}