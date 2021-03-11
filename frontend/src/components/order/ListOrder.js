
import CartApi from "../../api/CartApi.js";
import { $, reRender } from "../../utils.js";
import SidebarMenu from "../SidebarMenu.js";

const ListOrder = {
    async render(){
        //Show thong tin cart
        const { data: dataCarts } = await CartApi.getAll();
        // console.log(dataCarts)
        var dataCart = dataCarts.map(x => {
            return x.list 
        })
        // console.log(dataCart[0])
        var result = (dataCart[0]).map(x => {
            return x.name + " , " + x.count
        })
        // console.log(result)

        var result1 = dataCarts.map((x, index) => {
            return /*html*/`
            <div class="row py-1.5">
                <div class="col-1">${index}</div>
                <div class="col-3">${x.fullname}</div>
                <div class="col-3">${x.email}</div>
                <div class="col-2">${x.total}</div>
                <div class="col-3">
                    <a href="/#/detailorder/${x.id}" class="btn btn-primary">Detail</a>
                    <button data-id="${x.id}" class="btn btn-danger btn-remove">Remove</button>
                </div>
            </div>

            `
        }).join("")



        return /*html*/`
            <div class="pt--36">
                <div class="row">
                    <div class="col-1">STT</div>
                    <div class="col-3">Fullname</div>
                    <div class="col-3">Email</div>
                    <div class="col-2">Total</div>
                    <div class="col-3">Action</div>
                </div>
                ${result1} 
            </div>
        `
    },
    async afterRender(){
        const btns = $('#list-order .btn-remove');
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(e){
                if(btn.classList.contains('btn-remove')){
                    const question = confirm("Bạn có muốn xóa không?");
                    if(question){
                        await CartApi.remove(id);
                        await reRender(ListOrder, '#list-order');
                    }
                }
            })
        })
    }
}
export default ListOrder;