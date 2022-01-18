import axios from "axios";

export default axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "https://api.arthur.gg" : "http://localhost:3333",
    withCredentials: true
});