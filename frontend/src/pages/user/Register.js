import UserApi from '../../api/UserApi';
import '../../../css/login.css';

import { $ } from "../../utils.js";

const Register = {
    render(){
        return /*html*/`
        <div class="formLogin">
          <form class="mt-52" >
            <div class="mb-4">
              <b class="fs-1">Register </b>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Full Name</label>
              <input  type="text" class="form-control" id="fullname" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input  type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="password">
            </div>
            <button type="submit" id="btnRegister" class="btn btn-primary mb-3">Register</button>
            <div class="mb-3">
              <a href="/#/login">Login Here...</a>
            </div>
          </form>
        </div>

        `
    },
    async afterRender(){
      //dang ky
        $("#btnRegister").addEventListener('click', async (e) => {
          e.preventDefault()
          var id = Math.floor(Math.random() * 100) + 1;
          if(fullname.value == "" ){
            alert("Full name error")
            return 0
          }
          if(email.value == ""){
            alert("Email error")
            return 0
          }
          if(password.value == ""){
            alert("Password error")
            return 0
          }

          if( fullname.value != "" && email.value != "" && password.value != "" ){
            var body = {
              id: String(id),
              fullname: $("#fullname").value,
              email: $("#email").value,
              password: $("#password").value,
              admin: "No"
            }
            console.log(body)
            await UserApi.add(body);
            alert("Add new user ok")
          }else{
            alert("Please fill in the form")
            
          }
        })
    }

}
export default Register;