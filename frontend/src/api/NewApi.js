import { axiosClient } from './axiosClient';


const NewApi = {
    getAll(){
        const url = `/news`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/news/${id}`;
        return axiosClient.get(url);
    },
    update(id,data){
        const url = `/news/${id}`;
        return axiosClient.put(url,data)
    },
    add(body){
        const url = `/news`;
        return axiosClient.post(url,body);
    },
    remove(id){
        const url = `/news/${id}`;
        return axiosClient.delete(url);
    }
}
export default NewApi;