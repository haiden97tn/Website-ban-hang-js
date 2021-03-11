import { axiosClient } from './axiosClient';


const CategoryAPI = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    update(id,data){
        const url = `/categories/${id}`;
        return axiosClient.put(url,data)
    },
    add(body){
        const url = `/categories`;
        return axiosClient.post(url,body);
    },
    remove(id){
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    }
}
export default CategoryAPI;