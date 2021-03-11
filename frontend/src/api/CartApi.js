import { axiosClient } from './axiosClient';


const CartApi = {
    getAll(){
        const url = `/cart`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/cart/${id}`;
        return axiosClient.get(url);
    },
    update(id,data){
        const url = `/cart/${id}`;
        return axiosClient.put(url,data)
    },
    add(body){
        const url = `/cart`;
        return axiosClient.post(url,body);
    },
    remove(id){
        const url = `/cart/${id}`;
        return axiosClient.delete(url);
    }
}
export default CartApi;