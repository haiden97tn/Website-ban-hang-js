
import { $ } from "../../utils.js";
import CategoryAPI from "../../api/categoryAPI";
import ProductApi from "../../api/ProductApi";
const FilterPricePro = {
    async render(){
        const { data : categories } = await CategoryAPI.getAll();


        return /*html*/`
        <div class="container mx-auto p-12 mt-32">
        <div class="grid grid-cols-4 gap-2">
            <div class="col-span-1 border-r">
                <h2 class="text-3xl p-2.5  ">Categories</h2>
                <hr >
                <div class="listProduct text-1xl pl-5 ">
                    <ul>
                        <li class="text-gray-500 text-xl"><a href="/#/products">All</a></li>
                        ${
                            categories.map(category => {
                                return `<li class="text-gray-500 text-xl"><a href="/#/category/${category.id}">${category.name}</a></li>`
                            }).join("")
                        }
                        <li class="text-gray-500 text-xl">Price choose</li>
                        <li>
                            <select name="" id="pricePro">
                                <option value="0">0</option>
                                <option value="1">0 - 500</option>
                                <option value="2">500 - 5000</option>
                                <option value="3">5000 - Max</option>
                            </select>
                            <a href="#/filterpricepro"><button id="btnFind" class="btn btn-secondary py-0">Find</button></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-3 ">
                <h2 class="text-3xl p-2.5">Fashion</h2>
                <hr >
                    <div id="list-product" class="row">
                    
                    </div>
                </div>
            </div>
        </div>
        `
    },
    async afterRender(){
        // Start find product
        var btnFind = $("#btnFind");
        var pricePro = $("#pricePro");
        const {data : products} = await ProductApi.getAll() ;

        btnFind.addEventListener("click", () => {
            if(pricePro.value == 0){
                var result = products.filter( (x) => {
                    return Number(x.price) == 0
                })
                var result1 = result.map(x => {
                    return /*html*/`
                    <div class="col-3 mx-10">
                        <div class="card mt-11 mx-12" style="width: 18rem;">
                            <img src="${x.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${x.name}</h5>
                            <p class="card-text">${x.price}</p>
                            <a href="/#/products/${x.id}" class="btn btn-primary">Detail</a>
                            </div>
                        </div>
                    </div>
                   
                    `
                })
                $("#list-product").innerHTML = result1;
                

            }

            if(pricePro.value == 1){
                var result = products.filter( (x) => {
                    return Number(x.price) < 500
                })
                var result1 = result.map(x => {
                    return /*html*/`
                    <div class="col-3 mx-10">
                        <div class="card mt-11 mx-12" style="width: 18rem;">
                            <img src="${x.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${x.name}</h5>
                            <p class="card-text">${x.price}</p>
                            <a href="/#/products/${x.id}" class="btn btn-primary">Detail</a>
                            </div>
                        </div>
                    </div>
                   
                    `
                })
                $("#list-product").innerHTML = result1;
                

            }
            if(pricePro.value == 2){
                var result = products.filter( (x) => {
                    return  Number(x.price) < 5000 && Number(x.price) > 500
                })
                var result1 = result.map(x => {
                    return /*html*/`
                    <div class="col-3 mx-10">
                        <div class="card mt-11 mx-12" style="width: 18rem;">
                            <img src="${x.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${x.name}</h5>
                            <p class="card-text">${x.price}</p>
                            <a href="/#/products/${x.id}" class="btn btn-primary">Detail</a>
                            </div>
                        </div>
                    </div>
                   
                    `
                })
                $("#list-product").innerHTML = result1;
            } 
            if(pricePro.value == 3){
                var result = products.filter( (x) => {
                    return  Number(x.price) > 5000
                })
                var result1 = result.map(x => {
                    return /*html*/`
                    <div class="col-3 mx-10">
                        <div class="card mt-11 mx-12" style="width: 18rem;">
                            <img src="${x.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${x.name}</h5>
                            <p class="card-text">${x.price}</p>
                            <a href="/#/products/${x.id}" class="btn btn-primary">Detail</a>
                            </div>
                        </div>
                    </div>
                   
                    `
                })
                $("#list-product").innerHTML = result1;
            }           
        })

        // End find product
    }
}
export default FilterPricePro;