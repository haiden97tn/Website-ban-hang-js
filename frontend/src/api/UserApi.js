import { axiosClient } from './axiosClient';

const UserApi = {
    getAll(){
        const url = `/user`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
    update(id,data){
        const url = `/user/${id}`;
        return axiosClient.put(url,data)
    },
    add(body){
        const url = `/user`;
        return axiosClient.post(url,body);
    },
    remove(id){
        const url = `/user/${id}`;
        return axiosClient.delete(url);
    }
}
export default UserApi;