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
    // API REQUESTS

    getHomes = async ()=> {
        const { data } = await this.directusClient.getItems("homes", {fields: "*, translations.*, img.data.url"});
        return data.reduce((homes, home)=>{
            homes.push({
                img: home.img.data.full_url,
                alt: home.alt_img,
                title: home.translations[0].title,
                location: home.translations[0].location,
                amountRooms: home.amount_rooms,
                surface: home.surface,
                price: home.price,
            });
            return homes;
        }, []);
    };

    // MOCK REQUESTS

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


