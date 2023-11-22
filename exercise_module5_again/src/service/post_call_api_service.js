import axios from "axios";
export const getAll = async() => {
    try {
        const res = await axios.get("https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts");
        return res.data;
    }catch (e) {
        alert("error");
    }
}