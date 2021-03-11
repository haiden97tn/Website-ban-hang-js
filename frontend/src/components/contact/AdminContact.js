
import SidebarMenu from "../SidebarMenu";
import ListContact from "./ListContact";


const AdminContact = {
    async render(){
        

        return /*html*/`
        <div class="mt-28 container pt-28">
        <div class="row">
            ${ SidebarMenu.render() }
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2" >Quản lý contact</h1>
                    </div>
                    <div class="table-responsive" id="list-contact">
                        ${await ListContact.render() }
                    </div>
                </main>
            </div>
        </div>
        `
    },
    async afterRender(){
        return `${await ListContact.afterRender() }`
    }
}
export default AdminContact;