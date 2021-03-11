import CategoryAPI from "../api/categoryAPI.js";
import ProductApi from "../api/ProductApi.js";
import Header from "../components/Header.js";
import { $ } from "../utils.js";

const HomePage = {
    async render() {
        Header.afterRender();
        const { data: categories } = await CategoryAPI.getAll();
        const { data: cateWoman } = await ProductApi.getWoman({ categoryId: 1, _limit: 6 });
        const { data: cateMan } = await ProductApi.getMan({ categoryId: 2, _limit: 6 });

        var resultMan = cateMan.map(x => {
            return /*html*/`
                <div class="card col-4 mx-3 mt-3" style="width: 17rem; height: 13rem">
                    <a href="/#/products/${x.id}">
                        <img src="${x.image}" style="height: 9rem; width: 10rem" class="ml-10 card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text text-2xl text-center">${x.name}</p>
                        </div>
                    </a>
                </div>
            `
        })
        
        var resultWoman = cateWoman.map(x => {
            return /*html*/`
                <div class="card col-4 mx-3 mt-3" style="width: 17rem; height: 13rem">
                    <a href="/#/products/${x.id}">
                        <img src="${x.image}" style="height: 9rem; width: 10rem" class="ml-10 card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text text-2xl text-center">${x.name}</p>
                        </div>
                    </a>
                </div>
            `
        })

        // console.log(categories)
        var result = categories.map( category => {
            return /*html*/`
                <div class="col-2 border border-gray-600 rounded-md truncate">
                    <a href="#/category/${category.id}">
                        <h3 class="p-2">${category.name}</h3>
                        <img src="${category.image}" alt="">
                    </a>
                </div>
            `
        }).join("");
        return /*html*/`

        <div class="mt-36 container-fluid ">
        <div class="row">
            <div class="d-lg-block d-sm-none d-none">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://i.pinimg.com/originals/4d/89/d1/4d89d151ed0d759f0ffaa479d5f2046e.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="https://previews.123rf.com/images/goodstudio/goodstudio1909/goodstudio190900067/130218841-banner-template-for-fashion-show-with-top-models-wearing-trendy-seasonal-clothes-walking-along-runwa.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="https://i.pinimg.com/originals/9c/09/d5/9c09d50fdbd4ad715b1abe5e3d1731d1.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>

        </div>
        <div class="container mx-auto ">
            <h2 class=" p-3 text-center font-bold text-3xl p-10 pt-lg-5 pb-lg-5">TOP CATEGORIES</h2>
            <div class=" p-3 text-center grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
                <div class=" col-span-2 border border-gray-600 rounded-md truncate">
                    <a href="#/category/2">
                        <h3 class="bg-yellow-100 p-1">Mens Fashion</h3>
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/cat-1-180x135.png" alt="">
                    </a>
                </div>
                <div class="col-span-2 border border-gray-600 rounded-md truncate">
                    <a href="#/category/1">
                        <h3 class="bg-yellow-100 p-1">Women Fashion</h3>
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/cat-3-180x135.png" alt="">
                    </a>
                </div>
                <div class="col-span-2 border border-gray-600 rounded-md truncate">
                    <a href="#">
                        <h3 class="bg-yellow-100 p-1">Sunglass</h3>
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/cat-4-180x135.png" alt="">
                    </a>
                </div>
                <div class="col-span-2 border border-gray-600 rounded-md truncate">
                    <a href="#">
                        <h3 class="bg-yellow-100 p-1">Cap</h3>
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/cat-2-180x135.png" alt="">
                    </a>
                </div>
                <div class="col-span-2 border border-gray-600 rounded-md truncate">
                    <a href="#/category/4">
                        <h3 class="bg-yellow-100 p-1">Olds Fashion</h3>
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/cat-6-180x135.png" alt="">
                    </a>
                </div>
                <div class="col-span-2 border border-gray-600 rounded-md truncate">
                    <a href="#/category/3">
                        <h3 class="bg-yellow-100 p-1">Children Fashion</h3>
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/cat-5-180x135.png" alt="">
                    </a>
                </div>
                
            </div>
            <div class="row gap-3 text-center fs-4 justify-center">
                ${result}
            </div>
            <h2 class="p-3 text-center font-bold text-3xl p-10 pb-5">WOMAN FASHION</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <div class="ml-4 col-span-1 pt-3">
                    <a href="">
                        <img  src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/womens-279x389.jpg" alt="">
                    </a>
                </div>
                <div class="col-span-3">
                    <div class="row">
                        ${resultWoman}
                    </div>
                </div>   
            </div>
            <button class="btn_viewAll p-2">View All</button>
            <div class="img1 grid grid-cols-4">
                <div class="p-10 pt-7 col-span-2">
                    <a href="#">
                        <img src="images/ao1.png" alt="">
                    </a>
                </div>
                <div class="p-10 pt-7 col-span-2">
                    <a href="#">
                        <img src="images/ao2.jpg" alt="">
                    </a>
                </div>
            </div>
            <h2 class="p-3 pt-1 text-center font-bold text-3xl p-10 pb-lg-5">MENS FASHION</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="col-span-3">
                    <div class="row">
                        ${resultMan}
                    </div>
                </div>   
                <div class="ml-4 col-span-1 pt-3 ">
                    <a href="">
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/mens-279x389.jpg" alt="">
                    </a>
                </div>
            </div>
            <button class="btn_viewAll p-2">View All</button>
            <h2 class="p-3 pt-1 text-center font-bold text-3xl p-10 pb-lg-5">Featured Products</h2>
            <div class=" grid grid-cols-5 gap-1">
                <div class="card border-2 border-gray-200 col-span-1">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/09-224x224.jpg" alt="">
                </div>
                <div class="card border-2 border-gray-200 col-span-1">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/04-224x224.jpg" alt="">
                </div>
                <div class="card border-2 border-gray-200 col-span-1">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/10-224x224.jpg" alt="">
                </div>
                <div class="card border-2 border-gray-200 col-span-1">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/03-224x224.jpg" alt="">
                </div>
                <div class="card border-2 border-gray-200 col-span-1">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/06-224x224.jpg" alt="">
                </div>
            </div>
            <button class="btn_viewAll p-2">Load more</button>      
            <div class="pt-10">
                <img src="http://www.alexinternational.ro/wp-content/uploads/2016/02/BANNER-MENS-CLOTHING.jpg" alt="">
            </div>
        </div>
        `
    },  
    afterRender(){
    }
}
export default HomePage;