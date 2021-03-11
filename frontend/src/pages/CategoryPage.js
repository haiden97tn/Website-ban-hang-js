import ProductApi from "../api/ProductApi";
import CategoryAPI from '../api/categoryAPI';

import { parseRequesUrl } from "../utils";

const CategoryPage = {
    async render(){
        const { data : categories } = await CategoryAPI.getAll();

        const { id } = parseRequesUrl();
        const { data: products } = await ProductApi.getAll();
        let result = products.filter(product => product.categoryId == id);
        result = result.map(product => {
            return /*html*/`
            <div class="col-span-1 border-2">
                <a href="/#/products/${product.id}"><img src="${product.image}" alt=""></a>
                <div class="flex text-justify justify-between p-1.5 bg-gray-100">
                    <p> ${product.name} </p>
                    <p>${product.price} </p>
                </div>
                <div class="flex bg-gray-100 justify-between">
                    <p class="p-1.5">Qty:</p><input type="number" min="0" value="1" class="w-1/6 h-1/6 p-1.5 mr-7 mt-1">
                    <a href="/#/products/${product.id}" ><button class="bg-yellow-500 text-white p-1 rounded m-1.5 ">Add to Cart</button></a>
                </div>
            </div>
            `
        }).join("")
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
                            <li class="text-gray-500 text-xl"> <a href="#/filterpricepro"> Price choose </a></li>

                        </ul>
                    </div>
                </div>
                <div class="col-span-3 ">
                    <h2 class="text-3xl p-2.5">Fashion</h2>
                    <hr >
                    <div class="grid grid-cols-3 gap-5 p-1.5 pt-12">

                        ${result}

                        </div>
                    </div>
                </div>
            </div>

        `
    },
    afterRender(){
        
    }
}

export default CategoryPage;