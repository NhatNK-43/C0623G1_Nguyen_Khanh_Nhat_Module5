import {useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const categoryList = [
    "Crypto News",
    "New Year Special",
    "Opinion",
    "News",
    "Interviews"
]

export function PostCreate() {
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({});
    const [slug, setSlug] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setCategories(categoryList);
    }, [])

    const initValue = {
        id: "",
        title: "",
        category: "",
        content: "",
        updatedAt: "",
        slug: ""
    }

    const handleConvertSlug = (e) => {
        setSlug(e.trim().toLocaleLowerCase().replaceAll(" ", "-"))
    }

    const create = (values) => {
        console.log(values);
        toast.error("Create successfully!");
        navigate("/postlist");
    }

    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    create(values);
                }
            }>
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
                                        <Field className="form-control" id="title" name="title"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="category">Category</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <Field as="select" className="form-select" id="category" name="category">
                                            <option value="">---Select---</option>
                                            {
                                                categories.map((category, index) => (
                                                    <option key={index}>{category}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="content">Content</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <textarea className="form-control" id="content" name="content"/>
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
                                                 to="/postlist">Cancel
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