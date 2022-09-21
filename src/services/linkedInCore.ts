import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_LINKEDIN_URL;

class APILinkedInClient{
    get = (url: string, params?: {}) => {
        return axios.get(url, params)
    }
    
    create = (url: string, params?: {}) => {
        return axios.post(url, params );
    }

    update = (url: string, params?: {}) => {
        return axios.put(url, params);
    }
    delete = (url: string) => {
        return axios.delete(url)
    }
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default APILinkedInClient;

