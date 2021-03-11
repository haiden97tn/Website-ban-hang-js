import SidebarMenu from "../SidebarMenu";
import ListUsers from "./ListUsers";


const AdminUser = {
    async render(){
        return /*html*/`
        <div>
            <div class="mt-28 container pt-28" >
                <div class="row">
                ${ SidebarMenu.render() }
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2" >Quản lý user</h1>
                        </div>
                        <div class="table-responsive" id="list-user">
                            ${ await ListUsers.render()}
                        </div>
                    </main>
                </div>
            </div>
        </div>
        `
    },
    async afterRender(){
        return `${await ListUsers.afterRender() }`
    }   
}
export default AdminUser;