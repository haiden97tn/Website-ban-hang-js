
import CategoryAPI from '../../api/categoryAPI';
import ProductApi from '../../api/ProductApi';
import Header from '../../components/Header';

import { $ } from '../../utils.js';

 const ProductPages = {
    async render(){
        await Header.afterRender();
        try {

            const { data : categories } = await CategoryAPI.getAll();
            const {data : products} = await ProductApi.getAll() ;
            // console.log(products)
            const result = products.map(product => {
                return /*html*/`
                <div class="col-span-1 border-2">
                    <a href="/#/products/${product.id}"><img src="${product.image}" alt=""></a>
                    <div class="flex text-justify justify-between p-1.5 bg-gray-100">
                        <p> ${product.name} </p>
                        <p>${product.price} </p>
                    </div>
                    <div class="flex bg-gray-100 justify-between">
                        <p class="p-1.5">Qty:</p><input type="number" min="0" value="1" class="w-1/6 h-1/6 p-1.5 mr-7 mt-1">
                        <button data-id="${product.id}" class="btnAdd bg-yellow-500 text-white p-1 rounded m-1.5 ">Add to Cart</button>
                    </div>
                </div>
                `
            }).join("");
            // console.log(result)
    
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
        } catch (error) {
            console.log(error);
        }

        
    },
    async afterRender(){

        //Add to cart

        var keyLocalStorage = "shopcart"
        var cart = [];
        var count = 0
        const btns = $('.btnAdd');
        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(e){
                if(btn.classList.contains('btnAdd')){
                    const { data: product }  = await ProductApi.get(id);

                    var listCart = localStorage.getItem(keyLocalStorage)
                    console.log(listCart)
                    var checkCart = false;
                    if(listCart != null){
                        var listCart1 = JSON.parse(listCart);
                        for(var i = 0; i < listCart1.length; i++){
                            var idCart = listCart1[i];
                            if(idCart.id == product.id){
                                listCart1[i].count++;
                                checkCart = true;
                            }
                        }

                        if(checkCart == false){
                            var newPro = {
                                "id": product.id,
                                "name": product.name,
                                "image": product.image,
                                "price": product.price,
                                "status": product.status,
                                "quantity": product.quantity,
                                "categoryId": product.categoryId,
                                "count": 1
                            };
    
    
                            listCart1.push(newPro)
                        }
                        localStorage.setItem(keyLocalStorage, JSON.stringify(listCart1))
                        alert("Add to cart is OK")
                        
                    }else{
                        var listCart1 = []
                        var newPro = {
                            "id": product.id,
                            "name": product.name,
                            "image": product.image,
                            "price": product.price,
                            "status": product.status,
                            "quantity": product.quantity,
                            "categoryId": product.categoryId,
                            "count": 1
                        };


                        listCart1.push(newPro)
                        localStorage.setItem(keyLocalStorage, JSON.stringify(listCart1))
                        alert("Add to cart is OK")

                    }   
                   
                    
                    
 


                    // cart.push(product)

                    // localStorage.setItem(keyLocalStorage, JSON.stringify(listCart1))
                }
            })
        })

        //End Add to cart

        // Start find product
        

        // End find product
    }
}
export default ProductPages;
