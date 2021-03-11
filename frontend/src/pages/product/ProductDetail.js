// import data from '../data.js';
import ProductApi from '../../api/ProductApi.js';
import Header from '../../components/Header.js';
import { $ , parseRequesUrl } from '../../utils.js';





const ProductDetail = {
    async render(){
        await Header.afterRender();


        const { id } = parseRequesUrl();
        const { data: product} = await ProductApi.get(id);
        // console.log(product.categoryId);
        if(product.categoryId == 1){
            const { data: cateWoman } = await ProductApi.getWoman({ categoryId: 1, _limit: 5});
            var resultWoman = cateWoman.map(x => {
                return /*html*/`
                <div class="col-2">
                    <div class="card" style="width: 100%;">
                        <img src="${x.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${x.price}</h5>
                        <p class="card-text">${x.name}</p>
                        <a href="#/products/${x.id}" class="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                `
            })
        }else{
            var resultWoman = ""
        }

        if(product.categoryId == 2){
            const { data: cateMan } = await ProductApi.getMan({ categoryId: 1, _limit: 5});
            var resultMan = cateMan.map(x => {
                return /*html*/`
                <div class="col-2">
                    <div class="card" style="width: 100%;">
                        <img src="${x.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${x.price}</h5>
                        <p class="card-text">${x.name}</p>
                        <a href="#/products/${x.id}" class="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
                `
            })
        }else{
            var resultMan = ""
        }

        return /*html*/`
            
            <div class=" container mx-auto pt-32">
                <div class="mt-28 grid grid-cols-5 gap-3 pb-28">
                    <div class="col-span-2 border-4">
                        <img class="p-20" src="${product.image}" alt="">
                    </div>
                    <div class="col-span-3 pl-32">
                        <h1 class="text-5xl pt-10"> ${product.name}</h1>
                        <p class="text-3xl pt-2.5">${product.price}</p>
                        <p class="pt-2.5">Brand: China</p>
                        <p class="pt-2.5">Product Code: Product 21</p>
                        <p class="pt-2.5">Reward Points: 300</p>
                        <hr class="mt-6 mb-6">
                        <div class="flex">
                            <p class="mt-1.5">Quantity</p>
                            <input type="number" min="1" value="1" class="border-2 w-10 ml-2.5 pl-2.5">
                            <button data-id="${product.id}" class="btnAdd bg-yellow-500 text-white p-1 rounded m-1.5 ">Add to Cart</button>
                        </div>
                        <div class="flex pt-10 ">
                            <a href=""><img src="images/icon-fb.png" width="40" class="m-2"></a>
                            <a href=""><img src="images/icon-gg.jpg" width="40" class="m-2"></a>
                            <a href=""><img src="images/icon-tw.png" width="40" class="m-2"></a>
                            <a href=""><img src="images/icon-yt.png" width="40" class="m-2"></a>  
                        </div>
                    </div>

                </div>

                <hr >
                <div class="pt-28 ">
                    <h2 class="fs-3 pb-10">Related products: </h2>
                    <div class="row">
                        ${resultWoman}
                        ${resultMan}
                    </div>
                    
                </div>
            </div>
        `
    },
    async afterRender(){
        var keyLocalStorage = "shopcart";
       var btnAdd = $(".btnAdd");
       var id = btnAdd.dataset.id
       btnAdd.addEventListener("click", async () => {
           if(btnAdd.classList.contains('btnAdd')){
            const { data: product }  = await ProductApi.get(id);

            var listCart = localStorage.getItem(keyLocalStorage)
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
        }
       })
    }
}

export default ProductDetail;

