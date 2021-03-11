import { axiosClient } from './axiosClient';


const ContactApi = {
    getAll(){
        const url = `/contact`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/contact/${id}`;
        return axiosClient.get(url);
    },
    update(id,data){
        const url = `/contact/${id}`;
        return axiosClient.put(url,data)
    },
    add(body){
        const url = `/contact`;
        return axiosClient.post(url,body);
    },
    remove(id){
        const url = `/contact/${id}`;
        return axiosClient.delete(url);
    }
}
export default ContactApi;