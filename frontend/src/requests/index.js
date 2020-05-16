import axios from 'axios';
import mockData from "./mockData";
class AjaxRequests {
    /**
     *
     * @type {AxiosInstance}
     */
    axiosRequest = null;

    init = () => {
        this.axiosRequest = axios.create({
            baseURL: process.env.REACT_APP_API_URL
        });
        this.setAxiosHeaders({
            "Content-Type": "application/json"
        });
    };
    setAxiosHeaders = function(headers) {
        const headerKeys = Object.keys(headers);
        headerKeys.forEach(
            function(value) {
                this.axiosRequest.defaults.headers.common[value] = headers[value];
            }.bind(this)
        );
    };

    sleep = m => new Promise(r => setTimeout(r, m));
    // API REQUESTS
    getHomes = ()=> {
        return new Promise(async (resolve)=> {
            await this.sleep(10000);
            return resolve({data: {homes: mockData.homes }})
        })
    };

    getRealtors = ()=> {
        return new Promise(async (resolve)=> {
            await this.sleep(10000);
            return resolve({data: {realtors: mockData.realtors }})
        })
    };

}
const ajaxRequest = new AjaxRequests();
ajaxRequest.init();
export default ajaxRequest;


