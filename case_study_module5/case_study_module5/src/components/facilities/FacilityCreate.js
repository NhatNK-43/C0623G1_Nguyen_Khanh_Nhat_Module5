import * as facilityTypeService from "../../services/facilityTypeService";
import * as accompaniedServiceService from "../../services/accompaniedServiceService";
import * as facilityService from "../../services/facilityService";
import {NavLink, useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {useEffect, useRef, useState} from "react";
export function FacilityCreate() {
    const navigate = useNavigate();
    const refFacility = useRef();
    const [facility, setFacility] = useState();
    const [facilityTypes, setFacilityTypes] = useState([]);
    const [formatStyle, setFormatStyle] = useState({id: 1, name: "Villa"});
    const [accompaniedServices, setAccompaniedServices] = useState([]);
    const otherUtilities = ["Elevator", "Hairdryer", "Television", "Money safe"];
    const freeServices = ["Have breakfast", "Parking and shuttle", "Air conditional", "Wifi"];
    useEffect(() => {
        getAllFacilityType();
        getAllAccompaniedService();
    }, []);

    const getAllFacilityType = async () => {
        let data = await facilityTypeService.getAllFacilityType();
        setFacilityTypes(data);
    }

    const getAllAccompaniedService = async () => {
        let data = await accompaniedServiceService.getAllAccompaniedService();
        setAccompaniedServices(data);
    }



    if (!facilityTypes || !accompaniedServices || !formatStyle) {
        return null;
    }

    const initValue = {
        name: "",
        area: "",
        rentalCosts: "",
        capacity: "",
        rentalType: "",
        pathImage: "",
        freeServices: ["", "", "", ""],
        roomStandards: "",
        poolArea: "",
        numberFloor: "",
        otherUtilities: ["", "", "", ""],
        accompaniedServices: ["", "", "", "", ""],
        facilityType: JSON.stringify({
            id: 1,
            name: "Villa"
        })
    }
    console.log(formatStyle)
    const validateObject = {
        name: Yup.string()
            .required("Please enter facility name"),
        rentalCosts: Yup.number()
            .required("Please enter rental costs")
            .min(0, "The rental costs must be greater than 0"),
        area: Yup.number()
            .required("Please enter usable area")
            .min(20, "The pool area must be greater than 20"),
        capacity: Yup.number()
            .required("Please enter capacity")
            .min(1, "The capacity must be greater than 0")
            .integer("The capacity must be an integer number"),
        rentalType: Yup.string()
            .required("Please select rental type"),
        poolArea: formatStyle.id !== 3 ?
            Yup.number()
                .required("Please enter pool area")
                .min(20, "The pool area must be greater than 20")
            :
            Yup.number().notRequired(),
        numberFloor:
            formatStyle.id !== 3 ?
                Yup.number()
                    .required("Please enter number of floor")
                    .min(1, "The number of floor must be greater than 0")
                    .integer("The number of floor must be an integer number")
                :
                Yup.number().notRequired(),
    }

    const create = async (values) => {
        // console.log(values)
        values = {
            ...values,
            facilityType: formatStyle
        }
        console.log(values)
        values.area = +values.area;
        values.rentalCosts = +values.rentalCosts;
        values.capacity = +values.capacity;
        values.poolArea = +values.poolArea;
        values.numberFloor = +values.numberFloor;
        values.accompaniedServices = values.accompaniedServices.filter((item) => item !== "").flat();
        values.accompaniedServices.map((item, index) => {
            values.accompaniedServices[index] = JSON.parse(values.accompaniedServices[index]);
        })
        if (formatStyle.id === 3) {
            values.freeServices = values.freeServices.filter((item) => item !== "").flat();
        } else {
            values.otherUtilities = values.otherUtilities.filter((item) => item !== "").flat();
        }

        let status = await facilityService.createFacility(values);
        if (status === 201) {
            toast.success("Create successfully!");
            navigate("/facilities");
        } else {
            toast.error("Create failed!");
            navigate("/facilities/create");
        }
    }

    return (
        <>
            <div className="body">
                <div className="row pt-5 m-0">
                    <div className="col-md-3"/>
                    <div className="col-md-6 shadow p-0">
                        <div className="form-control p-5 rounded-0">
                            <div className="mb-5">
                                <h2 className="text-primary">Create Facility</h2>
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
                                        <label htmlFor="facilityType" className="form-label col-sm-3">
                                            Facility Type
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                innerRef={refFacility}
                                                className="form-select"
                                                aria-label="Default select example"
                                                as="select"
                                                name="facilityType"
                                                id="facilityType"
                                                value={JSON.stringify(formatStyle)}
                                                onChange={(event) => {
                                                    setFormatStyle(JSON.parse(event.target.value));
                                                }}
                                            >
                                                {
                                                    facilityTypes.map((facilityType) => (
                                                        <option
                                                            key={facilityType.id}
                                                            value={JSON.stringify(facilityType)}
                                                        >
                                                            {facilityType.name}
                                                        </option>
                                                    ))
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="form-label col-sm-3">
                                            Name
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="name" name="name" className="form-control"/>
                                            <ErrorMessage name="name" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="area" className="form-label col-sm-3">
                                            Area
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="number"
                                                id="area"
                                                name="area"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="area" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="rentalType" className="form-label col-sm-3">
                                            Rental type
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                className="form-select"
                                                aria-label="Default select example"
                                                component="select"
                                                name="rentalType"
                                                id="rentalType"
                                            >
                                                <option defaultValue="">--Select--</option>
                                                <option value="hours">Hours</option>
                                                <option value="day">Day</option>
                                                <option value="month">Month</option>
                                                <option value="year">Year</option>
                                            </Field>
                                            <ErrorMessage name="rentalType" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="rentalCosts" className="form-label col-sm-3">
                                            Rental costs
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="number" id="rentalCosts" name="rentalCosts"
                                                   className="form-control"
                                            />
                                            <ErrorMessage name="rentalCosts" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="capacity" className="form-label col-sm-3">
                                            Capacity
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="number" id="capacity" name="capacity"
                                                   className="form-control"
                                            />
                                            <ErrorMessage name="capacity" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    {
                                        formatStyle.id === 3 ?
                                            <div className="row mb-3">
                                                <label className="form-label col-sm-3">
                                                    Free Service
                                                </label>
                                                <div className="col-sm-9">
                                                    {/*<FieldArray name="otherUtilities">*/}
                                                    {/*    <div>*/}
                                                    {
                                                        freeServices.map((freeService, index) => (
                                                            <div className="form-check form-check-inline"
                                                                 key={index}>
                                                                <Field className="form-check-input" type="checkbox"
                                                                       name={`freeServices`}
                                                                       id={`freeServices${index}`}
                                                                       value={freeService}/>
                                                                <label className="form-check-label"
                                                                       htmlFor={`freeServices${index}`}>{freeService}</label>
                                                            </div>
                                                        ))
                                                    }
                                                    {/*    </div>*/}
                                                    {/*</FieldArray>*/}
                                                </div>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    formatStyle.id === 1 &&
                                                    <div className="row mb-3">
                                                        <label htmlFor="poolArea" className="form-label col-sm-3">
                                                            Pool area
                                                        </label>
                                                        <div className="col-sm-9">
                                                            <Field
                                                                type="number"
                                                                id="poolArea"
                                                                name="poolArea"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage name="poolArea" component="div"
                                                                          className="mt-2 form-text text-danger"
                                                            ></ErrorMessage>
                                                        </div>
                                                    </div>
                                                }
                                                <div className="row mb-3">
                                                    <label htmlFor="roomStandards" className="form-label col-sm-3">
                                                        Room Standards
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Field
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            component="select"
                                                            name="roomStandards"
                                                            id="roomStandards"
                                                        >
                                                            <option value="Superior">Superior</option>
                                                            <option value="Deluxe">Deluxe</option>
                                                            <option value="Suite">Suite</option>
                                                            <option value="Presidential">President</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="form-label col-sm-3">
                                                        Other Utilities
                                                    </label>
                                                    <div className="col-sm-9">
                                                        {/*<FieldArray name="otherUtilities">*/}
                                                        {/*    <div>*/}
                                                        {
                                                            otherUtilities.map((otherUtility, index) => (
                                                                <div className="form-check form-check-inline"
                                                                     key={index}>
                                                                    <Field className="form-check-input"
                                                                           type="checkbox"
                                                                           name={`otherUtilities[${index}]`}
                                                                           id={`otherUtilities${index}`}
                                                                           value={otherUtility}/>
                                                                    <label className="form-check-label"
                                                                           htmlFor={`otherUtilities${index}`}>{otherUtility}</label>
                                                                </div>
                                                            ))
                                                        }
                                                        {/*    </div>*/}
                                                        {/*</FieldArray>*/}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="numberFloor" className="form-label col-sm-3">
                                                        Number floor
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Field
                                                            type="number"
                                                            id="numberFloor"
                                                            name="numberFloor"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage name="numberFloor" component="div"
                                                                      className="mt-2 form-text text-danger"
                                                        ></ErrorMessage>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3">
                                            Accompanied Service
                                        </label>
                                        <div className="col-sm-9">
                                            {/*<FieldArray name="accompaniedServices">*/}
                                            {/*    <div>*/}
                                            {
                                                accompaniedServices.map((accompaniedService, index) => (
                                                    <div className="form-check form-check-inline"
                                                         key={accompaniedService.id}>
                                                        <Field className="form-check-input" type="checkbox"
                                                               name={`accompaniedServices[${index}]`}
                                                               id={`accompaniedService${index}`}
                                                               value={JSON.stringify(accompaniedService)}
                                                        />
                                                        <label className="form-check-label"
                                                               htmlFor={`accompaniedService${index}`}>{accompaniedService.name}</label>
                                                    </div>
                                                ))
                                            }
                                            {/*    </div>*/}
                                            {/*</FieldArray>*/}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="pathImage" className="form-label col-sm-3">
                                            Path Image
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="pathImage" name="pathImage"
                                                   className="form-control"/>
                                            <ErrorMessage name="pathImage" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
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