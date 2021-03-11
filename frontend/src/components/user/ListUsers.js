
import SidebarMenu from "../SidebarMenu.js";
import { $, reRender } from "../../utils.js";
import UserApi from "../../api/UserApi";

const ListUsers = {
    async render(){
        var {data : users} = await UserApi.getAll() ;
        var result = users.map( user => {
            return /*html*/`
                <div class="row pb-3">
                    <div class="col-3 ">${user.fullname}</div>
                    <div class="col-2 ">${user.email}</div>
                    <div class="col-2 ">${user.password}</div>
                    <div class="col-2 ">${user.admin}</div>
                    <div class="col-3">
                        <a href="/#/updateuser/${user.id}" class="btn btn-primary">Update</a>
                        <button class="btn btn-danger btn-remove" data-id="${user.id}">Remove</button>
                    </div>
                </div>
            `
        }).join("");
        

        return /*html*/`
            <div class="row pb-3 fs-3">
                <div class="col-3">Full name</div>
                <div class="col-2">Email</div>
                <div class="col-2">Password</div>
                <div class="col-2">Admin</div>
                <div class="col-3"><a href="#/register"><button class="btn btn-info">New user</button></a></div>
            </div>
            ${result}
        `  
        
    },
    async afterRender(){
        const btns = $('#list-user .btn-remove');
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(e){
                if(btn.classList.contains('btn-remove')){
                    const question = confirm("Bạn có muốn xóa không?");
                    if(question){
                        await UserApi.remove(id);
                        await reRender(ListUsers, '#list-user');
                    }
                }
            })
        })
        
    }
}
export default ListUsers;