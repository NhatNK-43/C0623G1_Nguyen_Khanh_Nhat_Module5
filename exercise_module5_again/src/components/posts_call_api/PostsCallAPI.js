import {useEffect, useState} from "react";
import * as postCallAPIService from "../../services/post_call_api_service"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllPostApiThunk} from "../../reduxs/middlewares/postThunkMiddleware";
import {GET_ALL_POST} from "../../reduxs/actions";

export function PostsCallAPI() {
    // KHONG SU DUNG REDUX
    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //     getAll();
    // }, []);
    // const getAll = async () => {
    //     const data = await postCallAPIService.getAll();
    //     setPosts(data);
    // }


    const posts = useSelector(store => store.posts);
    const dispatch = useDispatch();

    //SU DUNG REDUX THUNK
    useEffect(() => {
        dispatch(getAllPostApiThunk());
    }, [dispatch]);


    //SU DUNG REDUX SAGA
    // useEffect(() => {
    //     dispatch({
    //         type: GET_ALL_POST,
    //         payload: posts
    //     });
    // }, []);

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4 fw-bold">LIST POSTS</h1>
                <NavLink role="button" className="btn btn-sm btn-primary rounded-0 mb-3"
                         to="/create-post-call-api">Create</NavLink>
                <table className="table table-hover table-bordered">
                    <thead className="table-danger">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Category</th>
                        <th>Thumbnail URL</th>
                    </tr>
                    </thead>
                    <tbody className="table-light">
                    {
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.slug}</td>
                                <td>{post.category}</td>
                                <td>{post.thumbnail_url}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}