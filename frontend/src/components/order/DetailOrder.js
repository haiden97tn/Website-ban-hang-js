
import { parseRequesUrl } from "../../utils.js";
import CartApi from "../../api/CartApi";
import SidebarMenu from "../SidebarMenu.js";


const DetailOrder = {
    async render(){
        const { id } = parseRequesUrl();

        //Show thong tin cart
        const { data: dataCarts } = await CartApi.getAll();

        //check id sp
        var checkId = dataCarts.find(x => {
            return id == x.id
        })
        console.log(checkId.list)

        var dataAfterCheck = (checkId.list).map( x => {
            return /*html*/`
                <div class="row py-1.5">
                    <div class="col-3">${x.name}</div>
                    <div class="col-3"><img src="${x.image}" width="100px" /></div>
                    <div class="col-3">${x.price}</div>
                    <div class="col-3">${x.count}</div>
                </div>
            `
        }).join("")

        
        





        return /*html*/`
        <div class="container pt-28 mt-5">
            <div class="row">
                ${SidebarMenu.render()}

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Detail Order</h1>
                        <a href="#/adminorder" type="button" class="btn btn-info">Back to Order</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">

                            <div class="row py-1.5">
                                <div class="col-3">Name product</div>
                                <div class="col-3">Image</div>
                                <div class="col-3">Price</div>
                                <div class="col-3">Count</div>
                            </div>
                            ${dataAfterCheck}
                        </table>
                    </div>
                </main>
            </div>
        </div>
        `
    },
    async afterRender(){

    }
}
export default DetailOrder;