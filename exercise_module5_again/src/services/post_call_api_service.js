import axios from "axios";
export const getAll = async() => {
    try {
        const res = await axios.get("http://localhost:8080/posts_call_api");
        // const res = await axios.get("https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts");
        return res.data;
    }catch (e) {
        alert("error");
    }
}

export const create = async(post) => {
    try {
        const res = await axios.post("http://localhost:8080/posts_call_api",post);
        // const res = await axios.post("https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts", post);
        return res.status;
    }catch (e) {
        alert("error");
    }
}