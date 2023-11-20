import {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import * as postService from "../../service/post_service";
import {toast} from "react-toastify";
function Posts() {
    const [posts, setPosts] = useState([]);
    const [idDelete, setIdDelete] = useState({});
    // const id = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getAll();
    }, [])


    const getAll = async () => {
        const data = await postService.getAll();
        setPosts(data);
    }

    // const getPostById = async () => {
    //     const data =  await postService.getPostById(idDelete.id)
    //     return data.id;
    // }
    const handleGetInformDelete = (idDelete) => {
        setIdDelete(idDelete);
    }

    console.log(idDelete);
    const handleDelete = async () => {
        console.log(idDelete.id)
        const res = await postService.deletePost(6);
        console.log(res);
        // if(status===200){
        //     toast.success("Delete successfully!");
        //
        // } else {
        //     toast.error("Delete Failed!");
        // }
        // navigate("/");
    }

    const handleGetInformEdit = (post) => {

    }

    return (
        <>
            <div className="container">
                <h2 className="text-center mt-3 text-primary fw-bold p-2">LIST POSTS</h2>
                <div>
                    <NavLink to="/create" className="btn btn-sm btn-primary rounded-0 mb-3">Create</NavLink>
                </div>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>TIME</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody className="table-secondary">
                    {
                        posts.map((post, index) => (
                            <tr key={post.id}>
                                <td>{index + 1}</td>
                                <td className="text-primary">{post.title}</td>
                                <td>{post.category}</td>
                                <td>{post.updatedAt}</td>
                                <td>
                                    <button className="btn btn-sm btn-secondary rounded-0 me-3" type="button"
                                            onClick={() => handleGetInformEdit(post)}>Edit
                                    </button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            className="btn btn-sm btn-danger rounded-0"
                                            onClick={() => handleGetInformDelete(post.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content text-center">
                            <div className="modal-header justify-content-center">
                                <div>
                                    <h1 className="modal-title text-danger fs-4" id="exampleModalLabel">DELETE
                                        POST</h1>
                                    <h5 className="modal-title text-danger fw-bold">{idDelete.title}</h5>
                                </div>
                            </div>
                            <div className="modal-body">
                                <h5>Are you sure you want to delete post?</h5>
                                This action cannot be undone!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-secondary rounded-0"
                                        data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-sm btn-danger rounded-0"
                                        data-bs-dismiss="modal"
                                        onClick={handleDelete}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts;