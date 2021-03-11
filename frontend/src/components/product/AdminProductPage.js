


import Header from "../Header.js";
import SidebarMenu from "../SidebarMenu.js";
import ListProduct from "./ListProduct.js";

const AdminProductPage = {
    async render(){
        await Header.afterRender();

        return /*html*/`
                <div class="mt-28 container pt-28">
                <div class="row">
                ${ SidebarMenu.render() }
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2" >Quản lý sản phẩm</h1>
                        </div>
                        <div class="table-responsive" id="list-products">
                            ${await ListProduct.render() }
                        </div>
                    </main>
                </div>
            </div>
        `
    },
    async afterRender(){
        return `${await ListProduct.afterRender() }`
    }
}
export default AdminProductPage;