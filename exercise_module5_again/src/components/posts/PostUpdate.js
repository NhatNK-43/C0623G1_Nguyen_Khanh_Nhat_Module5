import {useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as postService from "../../service/post_service";

const categoryList = [
    "Crypto News",
    "New Year Special",
    "Opinion",
    "News",
    "Interviews"
]

export function PostUpdate() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({});
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        setCategories(categoryList);
        // getById();
    }, [])

    useEffect(() => {
        getById();
    }, [id])


    const getById = async () => {
        const data = await postService.getPostById(id);
        setPost(data);
    }

    if (!categories || !post) {
        return null;
    }

    console.log(post);
    const initValue = {
      title: post.title
    }


    const handleConvertSlug = (e) => {
        setPost(
            {
                ...post,
                title: e.target.value,
                slug: e.target.value.trim().toLocaleLowerCase().replaceAll(" ", "-")
            }
        )
    }

    const update = async (values) => {
        console.log(values);
        // values.id = post.id;
        // values.title = post.title;
        // values.slug = post.slug;
        // values.updatedAt = new Date().toLocaleDateString();
        // const status = await postService.update(values);
        // console.log(status);
        // if(status === 200){
        //     toast.success("Update successfully!");
        //     navigate("/");
        // } else {
        //     toast.error("Update failed!");
        //     navigate(`/update/${values.id}`);
        // }

    }

    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={values => {
                    // console.log(values);
                    update(values);
                }}
            >
                <Form>
                    <div className="row p-0 justify-content-center mt-5">
                        <div className="col-md-6">
                            <div className="form-control rounded-0">
                                {/*<Field type="hidden" name="id" value={post.id}/>*/}
                                <div className="fw-bold text-bg-info p-3 text-center">
                                    <h2>UPDATE POST</h2>
                                </div>
                                <div className="row p-3 shadow fw-bold gy-4">
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="title">Title</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <Field className="form-control" id="title" name="title"
                                               // value={post.title}
                                               // onChange={handleConvertSlug}
                                        />
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="category">Category</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <Field as="select" className="form-select" id="category" name="category">
                                            {
                                                categories.map((category) => (
                                                    <option key={category} value={category}>{category}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="content">Content</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <Field as="textarea" className="form-control" id="content" name="content"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label className="form-label" htmlFor="slug">Slug</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" id="slug" name="slug"
                                               // value={post.slug}
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