import {useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as postService from "../../service/post_service";
import * as Yup from "yup"

const categoryList = [
    "Crypto News",
    "New Year Special",
    "Opinion",
    "News",
    "Interviews"
]

export function PostCreate() {
    const [categories, setCategories] = useState([]);
    const [slug, setSlug] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setCategories(categoryList);
    }, [])

    const initValue = {
        title: "",
        category: "",
        content: "",
        updatedAt: "",
        slug: ""
    }

    const validateObject = {
        title: Yup.string()
            .required("Please enter a title"),
        category: Yup.string()
            .required("Please select a category"),
        content: Yup.string()
            .required("Please enter a content")
    }

    const create = async (values) => {
        values.slug = slug;
        values.updatedAt = new Date().toLocaleDateString();
        const status = await postService.create(values);
        if(status === 201){
            toast.success("Create successfully!");
            navigate("/");
        } else {
            toast.error("Create failed!");
            navigate("/create");
        }

    }

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={initValue}
                onSubmit={(values) => {
                    create(values);
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <Form>
                    <div className="row p-0 justify-content-center mt-5">
                        <div className="col-md-6">
                            <div className="form-control rounded-0">
                                <div className="fw-bold text-bg-info p-3 text-center">
                                    <h2>CREATE POST</h2>
                                </div>
                                <div className="row p-3 shadow fw-bold gy-4">
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="title">Title</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <Field className="form-control" id="title" name="title"
                                            onKeyUp={(e)=> setSlug(e.target.value.trim().toLocaleLowerCase().replaceAll(" ", "-"))}
                                        />
                                        <ErrorMessage name="title" component="small" className="text-danger"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="category">Category</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <Field as="select" className="form-select" id="category" name="category">
                                            <option value="">---Select---</option>
                                            {
                                                categories.map((category) => (
                                                    <option key={category}>{category}</option>
                                                ))
                                            }
                                        </Field>
                                        <ErrorMessage name="category" component="small" className="text-danger"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="content">Content</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <Field as="textarea" className="form-control" id="content" name="content"/>
                                        <ErrorMessage name="content" component="small" className="text-danger"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="slug">Slug</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" id="slug" name="slug"
                                               value={slug}
                                               readOnly/>
                                    </div>
                                    <div className="col-sm-12">
                                        <NavLink className="btn btn-sm btn-secondary rounded-0" type="button"
                                                 to="/">Cancel
                                        </NavLink>

                                        <button className="btn btn-sm btn-primary ms-3 rounded-0" type="submit">Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}