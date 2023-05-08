import axios from 'axios';

class PhoneServices {
    
    constructor() {
        this.api = axios.create({baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005"});
    }

    getPhone = (phoneId) => {
        return this.api.get(`/api/phones/${phoneId}`);
    };

    getAllPhones = () => {
        return this.api.get(`/api/phones`);
    };

}

const phoneServices = new PhoneServices();

export default phoneServices;