

import { $, parseRequesUrl } from "../../utils.js";
import firebase from "firebase";
import CategoryAPI from "../../api/categoryAPI";
import SidebarMenu from "../SidebarMenu.js";

const UpdateCategory = {
    async render(){
        const { id } = parseRequesUrl();
        const { data: category } = await CategoryAPI.get(id);
        console.log(category)

        return /*html*/`
        <div class="container pt-28 mt-5">
            <div class="row">
                ${SidebarMenu.render()}

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Update Category</h1>
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
                                        <td><input id="idCate" type="text" value="${category.id}" readonly></td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td><input id="nameCate" type="text" value="${category.name}"></td>
                                    </tr>
                                    <tr>
                                        <td>Image: </td>
                                        <td colspan="2">
                                            <img src="${category.image}" width="70px">
                                            <input type="file" id="product-image" >
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
        const { data: category} = await CategoryAPI.get(id);


        $("#btnUpdate").addEventListener('click', async () => {
            
            if ($("#product-image").value != "") {
                const productImage = $('#product-image').files[0];
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(function (){
                    storageRef.getDownloadURL().then( async (url) => {
                        var imageUrl = url;
                        var data = {
                            name: $('#nameCate').value,
                            image: imageUrl
                        }
                        await CategoryAPI.update(id, data);
                        alert("Update category ok")
                        window.location.hash = "/admincategory"
                    }) 
                })
            }else{
                var data = {
                    name: $('#nameCate').value,
                    image: category.image
                }
                await CategoryAPI.update(id, data);
                alert("Update category ok")
                window.location.hash = "/admincategory"
            }

           
        })

    }
}
export default UpdateCategory;