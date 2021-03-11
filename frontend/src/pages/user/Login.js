import '../../../css/login.css';
import { $ } from "../../utils.js";
import UserApi from '../../api/UserApi';

const Login = {
    async render(){
        return /*html*/`
        <div class="formLogin">
          <form class="mt-52" >
            <div class="mb-4">
              <b class="fs-1">Login </b>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input  type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="password">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" id="btnLogin" class="btn btn-primary mb-3">Login</button>
            <div class="mb-3">
              <a href="/#/register">Register Here...</a>
            </div>
          </form>
        </div>

        `
    },
    async afterRender(){
      // dang nhap
      // sessionStorage.clear();
      var {data : users} = await UserApi.getAll() ;

      $("#btnLogin").addEventListener('click', () => {
        var email = $("#email");
        var password = $("#password");

        if( email.value === "" || password.value === "" ){
          alert("Please fill in the form")
        }else{
          // console.log(users);
          var result = users.find( user => {
            if(email.value == user.email && password.value == user.password && user.admin == "No" ){
              const userId = user.id;
              const userName = user.fullname;
              sessionStorage.setItem(userId, userName);
              
              alert("Login user ok")
               location.hash = '/'
            }else if(email.value == user.email && password.value == user.password && user.admin == "Yes"){
              const userId = user.id;
              const userName = user.fullname;
              sessionStorage.setItem(userId, userName);

              alert("Login admin ok")
              location.hash = '/listproduct'
            }
            else if(email.value != user.email || password.value != user.password){
              console.log("Login error")
            }

          })

        }
      })  
    }

}
export default Login;