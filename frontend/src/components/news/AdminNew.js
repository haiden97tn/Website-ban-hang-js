

import SidebarMenu from "../SidebarMenu.js";
import ListNew from "./ListNew";

const AdminNew = {
    async render(){
        return /*html*/`
            <div class="mt-28 container pt-28">
            <div class="row">
                ${ SidebarMenu.render() }
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2" >Quản lý news</h1>
                        </div>
                        <div class="table-responsive" id="list-new">
                            ${ await ListNew.render() }
                        </div>
                    </main>
                </div>
            </div>
        `
    },
    async afterRender(){
        return `
            ${ await ListNew.afterRender() }
        `
    }
}
export default AdminNew;