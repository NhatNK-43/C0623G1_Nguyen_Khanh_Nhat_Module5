import {Formik, Form, Field, ErrorMessage} from "formik";
import {useEffect, useState} from "react";
import * as postCallAPIService from "../../services/post_call_api_service"
import {toast} from "react-toastify";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createPostApi} from "../../reduxs/middlewares/postThunkMiddleware";

export function PostCallAPICreate() {
    const navigate = useNavigate();
    const [slug, setSlug] = useState("");
    const dispatch = useDispatch();

    const initValue = {
        title: "",
        slug: "",
        category: "",
        thumbnail_url: ""
    }


//KHONG SU DUNG REDUX
//     const create = async (values) => {
//         values.slug = slug;
//         const status = await postCallAPIService.create(values);
//         if (status === 201) {
//             toast.success("Create successfully!");
//             navigate("/");
//         } else {
//             toast.error("Create failed!");
//         }
//     }

    //SU DUNG REDUX
    const create = async (values) => {
        values.slug = slug;
        const status = await dispatch(createPostApi(values));
        if (status === 201) {
            toast.success("Create successfully!");
            navigate("/");
        } else {
            toast.error("Create failed!");
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="w-25 form-control bg-light">
                    <h2 className="text-center text-bg-secondary p-2">CREATE NEW POST</h2>
                    <Formik
                        initialValues={initValue}
                        onSubmit={values => {
                            create(values);
                        }}
                    >
                        <Form>
                            <label className="form-label mt-3" htmlFor="title">Title</label>
                            <Field type="text" className="form-control" id="title" name="title"
                                   onKeyUp={(e) => setSlug(e.target.value.trim().toLowerCase().replaceAll(" ", "-"))}/>

                            <label className="form-label mt-3" htmlFor="slug">Slug</label>
                            <Field type="text" className="form-control" id="slug" name="slug" value={slug}/>

                            <label className="form-label mt-3" htmlFor="category">Category</label>
                            <Field type="text" className="form-control" id="category" name="category"/>

                            <label className="form-label mt-3" htmlFor="thumbnail_url">Thumbnail URL</label>
                            <Field type="text" className="form-control" id="thumbnail_url" name="thumbnail_url"/>

                            <div className="mt-3 text-center">
                                <NavLink to="/" className="btn btn-sm btn-secondary rounded-0">Cancel</NavLink>
                                <button type="submit" className="btn btn-sm btn-primary rounded-0 ms-4">Save</button>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}