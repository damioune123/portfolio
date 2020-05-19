import axios from 'axios';
import DirectusSDK from "@directus/sdk-js";

import mockData from "./mockData";
class AjaxRequests {
    /**
     *
     * @type {AxiosInstance}
     */
    axiosRequest = null;

    directusClient = null;


    init = async () => {
        this.axiosRequest = axios.create({
            baseURL: process.env.REACT_APP_API_URL
        });
        this.setAxiosHeaders({
            "Content-Type": "application/json"
        });
        console.log('hey');
        this.directusClient = new DirectusSDK({
            project: "_",
            url: process.env.DIRECTUS_API_URL,
            email: process.env.DIRECTUS_USER,
            password: process.env.DIRECTUS_PASSWORD
        });
        console.log('hey 2');
        const test = await this.directusClient.getItems("homes");
        console.log('test', test);
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
    getHomes =async ()=> {
        const test = await this.directusClient.getItems("homes");
        console.log('test', test);
        return test;
    };
    // API REQUESTS
    getHomesMock = ()=> {
        return new Promise(async (resolve)=> {
            await this.sleep(10);
            return resolve({data: {homes: mockData.homes }})
        })
    };

    getRealtors = ()=> {
        return new Promise(async (resolve)=> {
            await this.sleep(10);
            return resolve({data: {realtors: mockData.realtors }})
        })
    };

    getGalleryItems = ()=> {
        return new Promise(async (resolve)=> {
            await this.sleep(10);
            return resolve({data: {galleryItems: mockData.galleryItems }})
        })
    };

    getMetaData = ()=> {
        return new Promise(async (resolve)=> {
            await this.sleep(10);
            return resolve({data: {metaData: mockData.metaData }})
        })
    };

}
const ajaxRequest = new AjaxRequests();
ajaxRequest.init();
export default ajaxRequest;


