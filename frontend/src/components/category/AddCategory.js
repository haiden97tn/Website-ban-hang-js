

import { $ } from "../../utils.js";
import firebase from "firebase";
import CategoryAPI from "../../api/categoryAPI";
import SidebarMenu from "../SidebarMenu.js";

const AddCategory = {
    render(){
        return /*html*/`
        <div class="container pt-36 mt-5">
            <div class="row">
            ${ SidebarMenu.render()}

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Add new Category</h1>
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
                                        <td><input id="nameCate" type="text"></td>
                                    </tr>
                                    <tr>
                                        <td>Image: </td>
                                        <td><input type="file" id="product-image"></td>
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
    afterRender(){
        $("#btnNews").addEventListener('click', () => {

            var idCate = Math.floor(Math.random() * 1000) + 1;
            var nameCate = $('#nameCate');
            // var imagePro = $('#imagePro');
            if ($("#product-image").value != "" && nameCate.value != ""){
                const productImage = $('#product-image').files[0];
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(  () => {
                    storageRef.getDownloadURL().then( async (url) => {
                        var imageUrl = url;
                        var body = {
                            id: idCate,
                            name: nameCate.value,
                            image: imageUrl
                        }
                        await CategoryAPI.add(body);
                        alert("Upload Category ok")
                        window.location.hash = "/admincategory" ;
                    }) 
                })
            }else{
                alert("Add new category false!")
            }

            


            

        })
    }
}

export default AddCategory;