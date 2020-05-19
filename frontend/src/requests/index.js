import axios from 'axios';
import DirectusSDK from "@directus/sdk-js";

import mockData from "./mockData";
class AjaxRequests {

    directusClient;

    init = async () => {
        this.directusClient = new DirectusSDK({
            project: "api",
            url: process.env.DIRECTUS_API_URL,
            token: process.env.DIRECTUS_TOKEN
        });
    };

    sleep = m => new Promise(r => setTimeout(r, m));
    getHomes = ()=> {
        return this.directusClient.getItems("homes");
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


