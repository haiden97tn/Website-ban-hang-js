import NewApi from "../../api/NewApi";
import { parseRequesUrl } from "../../utils.js";

const Newsdetail = {
    async render(){
        const { id } = parseRequesUrl();

        const { data: news } = await NewApi.get(id);


        return /*html*/`
            <div class="pt-48 container text-2xl text-center" style="width: 1000px;">
                <div class="fs-2 pb-32">${news.title}</div>
                <div class="pb-32"><img src="${news.image}" width="1000px" alt=""> </div>
                <div>${news.content}</div>
                
            </div>
        `
    },
    afterRender(){

    }
}
export default Newsdetail;