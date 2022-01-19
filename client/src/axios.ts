import axios from "axios";

export default axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "	https://9mnpmy4o88.execute-api.eu-west-2.amazonaws.com" : "http://localhost:3333",
    withCredentials: true
});