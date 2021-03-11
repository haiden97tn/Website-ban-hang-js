import NewApi from "../../api/NewApi.js";
import { $, reRender } from "../../utils.js";


const ListNew = {
    async render(){
        const { data: news } = await NewApi.getAll();
        console.log(news)
        var result = news.map( x => {
            return /*html*/`
                <div class="row pb-3">
                    <div class="col-1">${x.id}</div>
                    <div class="col-5">${x.title}</div>
                    <div class="col-3"><img src="${x.image}" width="70px" /></div>
                    <div class="col-3">
                        <a href="#/updatenew/${x.id}" class="btn btn-primary">Update</a>
                        <button data-id="${x.id}" class="btn btn-danger btn-remove">Remove</button>
                    </div>
                </div>
            `
        }).join("")

        return /*html*/`
            <div class="row pb-3 fs-2">
                <div class="col-1">ID</div>
                <div class="col-5">Title</div>
                <div class="col-3">Image</div>
                <div class="col-3"><a href="#/addnew" class="btn btn-info">New </a></div>       
            </div>  
            ${result}
        `
    },
    async afterRender(){
        const btns = $('#list-new .btn-remove');
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(e){
                if(btn.classList.contains('btn-remove')){
                    const question = confirm("Bạn có muốn xóa không?");
                    if(question){
                        await NewApi.remove(id);
                        await reRender(ListNew, '#list-new');
                    }
                }
            })
        })
    }
}
export default  ListNew;