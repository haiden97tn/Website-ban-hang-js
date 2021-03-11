
import { $, reRender } from "../../utils.js";
import CategoryAPI from "../../api/categoryAPI";

const ListCategory = {
    async render(){
        const { data: categorys } = await CategoryAPI.getAll();
        console.log(categorys)
        var result = categorys.map( category => {
            return /*html*/`
                <div class="row pb-3">
                    <div class="col-3">${category.id}</div>
                    <div class="col-3">${category.name}</div>
                    <div class="col-3"><img src="${category.image}" width="70px" /></div>
                    <div class="col-3">
                        <a href="#/updatecategory/${category.id}" class="btn btn-primary">Update</a>
                        <button data-id="${category.id}" class="btn btn-danger btn-remove">Remove</button>
                    </div>
                </div>
            `
        }).join("")

        return /*html*/`
            <div class="row pb-3 fs-2">
                <div class="col-3">ID</div>
                <div class="col-3">Category name</div>
                <div class="col-3">Image</div>
                <div class="col-3"><a href="#/addcategory" class="btn btn-info">New Category</a></div>       
            </div>  
            ${result}
        `
    },
    async afterRender(){
        const btns = $('#list-category .btn-remove');
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(e){
                if(btn.classList.contains('btn-remove')){
                    const question = confirm("Bạn có muốn xóa không?");
                    if(question){
                        await CategoryAPI.remove(id);
                        await reRender(ListCategory, '#list-category');
                    }
                }
            })
        })
    }
}
export default ListCategory;