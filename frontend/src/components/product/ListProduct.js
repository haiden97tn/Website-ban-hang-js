import CategoryAPI from '../../api/categoryAPI.js';
import ProductApi from '../../api/ProductApi.js';
import { $, reRender } from "../../utils.js";

const ListProduct = {
    async render(){
        const { data: products } = await ProductApi.getAll();
        const { data: categorys } = await CategoryAPI.getAll();


        return /*html*/`
            <div class="row">
                <div class="col-3">Name</div>
                <div class="col-2">Image</div>
                <div class="col-2">Price</div>
                <div class="col-1">Category</div>
                <div class="col-1">Status</div>
                <div class="col-3 pb-3"><a href="/#/newProduct"><button type="button" class="btn btn-info">New Product</button></a> </div>
            </div>
            <hr>
            ${products.map( (product, index) => {
                const categoryPro = categorys.find( ({id}) => {
                    return id == product.categoryId;
                })

                return /*html*/`
                <div class="row pb-3 pt-3">
                    <div class="col-3">${product.name}</div>
                    <div class="col-2"><img src="${product.image}" width="100px" /></div>
                    <div class="col-2">${product.price}</div>
                    <div class="col-1">${categoryPro.name}</div>
                    <div class="col-1">${product.status}</div>
                    <div class="col-3">
                        <a href="/#/updateproduct/${product.id}" class="btn btn-primary">Update</a>
                        <button class="btn btn-danger btn-remove" data-id="${product.id}">Remove</button>
                    </div>
                </div>
                `
            }).join("")}
        `
    },
    async afterRender(){
        const btns = $('#list-products .btn');
        // console.log(btns);
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(e){
                if(btn.classList.contains('btn-remove')){
                    const question = confirm("Bạn có muốn xóa không?");
                    if(question){
                        await ProductApi.remove(id);
                        await reRender(ListProduct, '#list-products');
                    }
                }
            })
        })
    }
}
export default ListProduct;