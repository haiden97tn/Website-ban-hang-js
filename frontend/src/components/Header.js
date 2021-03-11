import ProductApi from "../api/ProductApi.js";
import { $ } from "../utils.js";

const Header = {
    async render() {

        if(sessionStorage.length > 0){
            for( let i = 0; i < sessionStorage.length; i++){
                const key = sessionStorage.key(i);
                // console.log(`${key} => ${sessionStorage.getItem(key)}`);
                var nameUser = `${sessionStorage.getItem(key)} `  ;
                var Logout = `(Logout)`;
                
            }
        }else{
            var nameUser = [];
            var Logout = [];
        }




        return /*html*/`
        <div class="relative w-full bg-blue-500 ">
            <div class="grid grid-cols-1 bg-opacity-50 w-full bg-gray-200 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-9">
                <div class="col-span-2 grid hidden sm:hidden lg:block">
                    <a href="#">
                        <img class="p-10 pl-28" src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/catalog/logo.png"  alt="">
                    </a>
                </div>
                <div class="text-center listNav nav col-span-3 grid hidden sm:hidden lg:block">
                    <ul class="flex text-2xl grid sm:grid-cols-1 lg:grid-cols-5">
                        <li class="pt-12 pr-5"><a href="/#/">Home</a></li>
                        <li class="pt-12 pr-5"><a href="/#/products">Products</a></li>
                        <li class="pt-12 pr-5"><a href="/#/news">News</a></li>
                        <li class="pt-12 pr-5"><a href="/#/contact">Contact</a></li>
                        <li class="pt-12 pr-5"><a href="/#">Dashboard</a></li>             
                    </ul>
                </div>
                <div class="btn-menu col-span-1 grid sm:block lg:hidden" >
                    <button id="btn-add" >
                        <img width="50" height="50" src="https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png" alt="">
                    </button>                
                </div>

                <div class="ml-10 col-span-2 align-items-center flex grid hidden sm:hidden lg:flex">
                    <input type="text" placeholder="search" id="search" class=" rounded-2 p-1.5 border-5 h-25 ml-14" >
                    <a href="#/search" id="btnSearch" class="btn btn-danger h-auto" >Search</a>
                </div>
                <div class="ml-16 align-items-center flex col-span-2 grid hidden sm:hidden lg:flex">
                    <a href="/#/login">
                        <img class="w-8 mr-3" src="images/icon-user.png" width="50" height="50" alt="">
                    </a>
                    <a href="/#/cart">
                        <img class="w-8 mr-3" src="images/icon-cart.png" width="50" alt="">
                        
                    </a>
                    <a href="#"  >
                        <ul>
                            <li><b>${nameUser}</b></li>
                            <li><button id="btnLogout" >${Logout}</button></li>
                        </ul>
                        
                        
                    </a>
                </div>
            </div>
        </div>
        `
    },

    async afterRender(){
        //search
        $("#btnSearch").addEventListener("click", async () => {
            var search = $("#search");
            const { data: products} = await ProductApi.getAll();
            const result = products.filter( product => {
                return product.name == search.value
            })
            
            const result1 = result.map( x => {
                return /*html*/`
                <div class="card mt-11 mx-12" style="width: 18rem;">
                    <img src="${x.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${x.name}</h5>
                    <p class="card-text">${x.price}</p>
                    <a href="/#/products/${x.id}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
                `
            });

            console.log(result1)
            $("#result-search").innerHTML = result1 ;
            window.location.hash = "/search" ;
        })
        //dang nhap
        $("#btnLogout").addEventListener('click', () => {
            sessionStorage.clear();
        })
    }
}
export default Header;