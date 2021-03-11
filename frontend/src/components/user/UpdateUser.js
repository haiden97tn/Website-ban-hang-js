

import UserApi from "../../api/UserApi";
import { $, parseRequesUrl } from "../../utils";
import SidebarMenu from "../SidebarMenu";


const UpdateUser = {
    async render(){
        const { id } = parseRequesUrl();
        const { data: user} = await UserApi.get(id);
 

        console.log(user);

        return /*html*/`

            <div class="mt-28 container pt-28" >
                <div class="row">
                ${ SidebarMenu.render() }
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2" >Update user</h1>
                        </div>
                        <div class="table-responsive" >

                            <table class="table table-bordered">
                                <tr>
                                    <td>Id</td>
                                    <td><input id="iduser" type="text" value="${user.id}"></td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td><input id="fullname" type="text" value="${user.fullname}"></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input id="email" type="text" value="${user.email}"></td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td><input id="password" type="text" value="${user.password}"></td>
                                </tr>
                                <tr>
                                    <td>Admin</td>
                                    <td><input id="admin" type="text" value="${user.admin}"></td>
                                </tr>

                                <tr>
                                    <td><button id="btnUpdate" class="btn btn-primary">Update</button></td>
                                </tr>
                            </table>         
                        </div>
                    </main>
                </div>
            </div>

        `
    },
    afterRender(){
        $("#btnUpdate").addEventListener('click', async () => {
            var iduser = $('#iduser');
            var fullname = $('#fullname');
            var email = $('#email');
            var password = $('#password');
            var admin = $('#admin');

            await UserApi.update(iduser.value,  { 
                fullname: fullname.value, 
                email: email.value, 
                password: password.value, 
                admin: admin.value
            })
            alert("Update user ok")
            window.location.hash = "/adminuser";
        })
    }
}
export default UpdateUser;