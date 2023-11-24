import axios from "axios";
const URL_POSTS = "http://localhost:8080/posts"
export const getAll = async ()=> {
    try {
        const res = await axios.get(URL_POSTS);
        return res.data;
    } catch (e) {
        alert("error");
    }
}

export const getPostById = async (id) => {
    try {
        const res = await axios.get(`${URL_POSTS}/${id}`);
        return res.data;
    } catch (e) {
        alert("error");
    }
}
export const create = async (values) => {
    try {
        const res = await axios.post(URL_POSTS,values);
        return res.status;
    } catch (e) {
        alert("error");
    }
}

export const update = async (values) => {
    try {
        const res = await axios.patch(`${URL_POSTS}/${values.id}`,values);
        return res.status;
    } catch (e) {
        alert("error");
    }
}

export const deletePost = async (id) => {
    try {
        const res = await axios.delete(`${URL_POSTS}/${id}`);
        return res.status;
    } catch (e) {
        alert("error");
    }
}