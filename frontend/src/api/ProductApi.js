import axios from 'axios';
import { axiosClient } from './axiosClient';


const ProductApi = {
    getAll(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    getWoman(params){
        const url = `/products`;
        return axiosClient.get(url, { params });
    },
    getMan(params){
        const url = `/products`;
        return axiosClient.get(url, { params });
    },
    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    update(id,data){
        const url = `/products/${id}`;
        return axiosClient.put(url,data)
    },
    add(body){
        const url = `/products`;
        return axiosClient.post(url,body);
    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }
}
export default ProductApi;