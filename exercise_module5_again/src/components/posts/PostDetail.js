import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import * as postService from "../../services/post_service";

export function PostDetail() {
    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getById();
    }, [id])


    const getById = async () => {
        const data = await postService.getPostById(id);
        setPost(data);
    }

    if (!post) {
        return null;
    }

    return (
        <>

            <div className="row p-0 justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="form-control rounded-0">
                        {/*<Field type="hidden" name="id" value={post.id}/>*/}
                        <div className="fw-bold text-bg-info p-3 text-center">
                            <h2>DETAIL POST</h2>
                        </div>
                        <div className="row p-3 shadow fw-bold gy-4">
                            <div className="col-sm-3">
                                <label className="form-label" htmlFor="title">Title</label>
                            </div>
                            <div className="col-sm-9">
                                <input className="form-control" id="title" name="title"
                                       value={post.title}
                                       disabled
                                />
                            </div>
                            <div className="col-sm-3">
                                <label className="form-label" htmlFor="category">Category</label>
                            </div>
                            <div className="col-sm-9">
                                <input className="form-select" id="category" name="category" disabled value={post.category}/>
                            </div>
                            <div className="col-sm-3">
                                <label className="form-label" htmlFor="content">Content</label>
                            </div>
                            <div className="col-sm-9">
                                <textarea className="form-control" id="content" name="content" disabled value={post.content}/>
                            </div>
                            <div className="col-sm-3">
                                <label className="form-label" htmlFor="slug">Slug</label>
                            </div>
                            <div className="col-sm-9">
                                <input className="form-control" id="slug" name="slug" value={post.slug}
                                       disabled/>
                            </div>
                            <div className="col-sm-3">
                                <label className="form-label" htmlFor="updateAt">Time</label>
                            </div>
                            <div className="col-sm-9">
                                <input className="form-control" id="updateAt" name="updateAt" value={post.updatedAt}
                                       disabled/>
                            </div>
                            <div className="col-sm-12">
                                <NavLink className="btn btn-sm btn-secondary rounded-0" type="button"
                                         to="/">Back to list post
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}