import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/',
    timeout: 1000,
    headers: { 'Accept': 'application/json' }
});


export default AxiosInstance;