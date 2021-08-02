import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8282' // api url (cloud function or express)
});

export default instance;