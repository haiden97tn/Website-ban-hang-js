import { parseRequesUrl } from '../../utils.js';
import { $ } from '../../utils.js';
import firebase from "firebase";
import ProductApi from '../../api/ProductApi.js';
import SidebarMenu from '../SidebarMenu.js';
import CategoryAPI from '../../api/categoryAPI.js';

const UpdateProduct = {
    async render(){
        const { id } = parseRequesUrl();
        const { data: product} = await ProductApi.get(id);
        const { data: categorys } = await CategoryAPI.get(product.categoryId);

        console.log(categorys.name);
        return /*html*/`
            <div class="container pt-28 mt-5">
                <div class="row">
                    ${SidebarMenu.render()}
        
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Update Product</h1>
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
                                            <td>ID</td>
                                            <td><input id="idPro" type="text" value="${product.id}" readonly></td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td><input id="namePro" type="text" value="${product.name}"></td>
                                        </tr>
                                        <tr>
                                            <td>Image: </td>
                                            <td colspan="2">
                                                <img src="${product.image}" width="70px">
                                                <input type="file" id="product-image" >
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td><input id="pricePro" type="text" value="${product.price}"></td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td><input id="statusPro" type="text" value="${product.status}"></td>
                                        </tr>
                                        <tr>
                                            <td>Quantity</td>
                                            <td><input id="quantityPro" type="text" value="${product.quantity}"></td>
                                        </tr>
                                        <tr>
                                            <td>Category</td>
                                            <td>
                                                <select  id="categoryId">
                                                    <option value="${categorys.id}" >${categorys.name}</option>
                                                    <option value="1">Woman</option>
                                                    <option value="2">Man</option>
                                                    <option value="3">Kid</option>
                                                    <option value="4">Olds</option>
                                                    <option value="5">Young</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><button id="btnUpdate" class="btn btn-primary">Update</button></td>
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
        const { id } = parseRequesUrl();
        const { data: product} = await ProductApi.get(id);


        $("#btnUpdate").addEventListener('click', async () => {
            
            if ($("#product-image").value != "") {
                const productImage = $('#product-image').files[0];
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(function (){
                    storageRef.getDownloadURL().then( async (url) => {
                        var imageUrl = url;
                        var data = {
                            name: $('#namePro').value,
                            image: imageUrl,
                            price: $('#pricePro').value,
                            status: $('#statusPro').value,
                            quantity: $('#quantityPro').value,
                            categoryId: $('#categoryId').value
                        }
                        await ProductApi.update(id, data);
                        alert("Update product ok")
                        window.location.hash = "/listproduct"
                    }) 
                })
            }else{
                var data = {
                    name: $('#namePro').value,
                    image: product.image,
                    price: $('#pricePro').value,
                    status: $('#statusPro').value,
                    quantity: $('#quantityPro').value,
                    categoryId: $('#categoryId').value
                }
                await ProductApi.update(id, data);
                alert("Update product ok")
                window.location.hash = "/listproduct"
            }

           
        })

      
    }
        
    
}

export default UpdateProduct;