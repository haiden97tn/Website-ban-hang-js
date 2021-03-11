
import { parseRequesUrl,$ } from '../../utils.js';
import firebase from 'firebase';
import "../../firebase";
import ProductApi from '../../api/ProductApi.js';
import SidebarMenu from '../SidebarMenu.js';

const NewProduct = {
    async render(){
        return /*html*/`
            <div class="container pt-28 mt-5">
                <div class="row">
                ${ SidebarMenu.render()}
        
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Add new Product</h1>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-sm">
                                <thead>
                                </thead>
                                <tbody id="product-content">
        
                                </tbody>
                                <div id="content2">
        
                                </div>
                                <form id="form-add">
                                    <table class="table table-bordered">
   
                                        <tr>
                                            <td>Name</td>
                                            <td><input id="namePro" type="text"></td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td><input id="pricePro" type="text"></td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>
                                                <select name="" id="statusPro">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Quantity</td>
                                            <td><input id="quantityPro" type="text"></td>
                                        </tr>
                                        <tr>
                                            <td>Image: </td>
                                            <td><input type="file" id="product-image"></td>
                                        </tr>
                                        <tr>
                                            <td>Category</td>
                                            <td>
                                                <select name="" id="categoryId">
                                                    <option value="1">Woman</option>
                                                    <option value="2">Man</option>
                                                    <option value="3">Kid</option>
                                                    <option value="4">Olds</option>
                                                    <option value="5">Young</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><button id="btnNews" class="btn btn-primary">Add new</button></td>
                                        </tr>
                                    </table>  
                                </form>   
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        `
    },

    async afterRender(){
        $("#btnNews").addEventListener('click', () => {

            var idPro = Math.floor(Math.random() * 1000) + 1;
            var namePro = $('#namePro');
            // var imagePro = $('#imagePro');
            var pricePro = $('#pricePro');
            var statusPro = $('#statusPro');
            var quantityPro = $('#quantityPro');
            var categoryId = $('#categoryId');

            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(  () => {
                storageRef.getDownloadURL().then( async (url) => {
                    var imageUrl = url;
                    var body = {
                        id: String(idPro),
                        name: namePro.value,
                        image: imageUrl,
                        price: pricePro.value,
                        status: statusPro.value,
                        quantity: quantityPro.value,
                        categoryId: categoryId.value,
                        count: 1
                    }
        
                    await ProductApi.add(body);
                    alert("Upload product ok")
                    window.location.hash = "/listproduct" ;
                }) 
            })


            

        })
    }
}

export default NewProduct;