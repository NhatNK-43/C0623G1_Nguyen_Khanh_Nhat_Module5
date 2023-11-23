import axios from "axios";
const URL_CONTRACT = "http://localhost:8080/contracts";
export const getAllContract = async () => {
    try {
        const res = await axios.get(URL_CONTRACT);
        return res.data;
    } catch (e) {
        console.log("Error");
    }
}