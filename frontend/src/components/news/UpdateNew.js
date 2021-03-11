
import { $, parseRequesUrl } from "../../utils.js";
import firebase from "firebase";
import NewApi from "../../api/NewApi";
import SidebarMenu from "../SidebarMenu.js";

const UpdateNew = {
    async render(){
        const { id } = parseRequesUrl();
        const { data: news } = await NewApi.get(id);
        console.log(news)

        return /*html*/`
        <div class="container pt-28 mt-5">
            <div class="row">
                ${SidebarMenu.render()}

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Update New</h1>
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
                                        <td><input id="idNew" type="text" value="${news.id}" readonly></td>
                                    </tr>
                                    <tr>
                                        <td>Title</td>
                                        <td>
                                            <textarea name="" id="title" cols="90" rows="10" >${news.title}</textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Content</td>
                                        <td>
                                            <textarea name="" id="editor" cols="90" rows="10" >${news.content}</textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Image: </td>
                                        <td colspan="2">
                                            <img src="${news.image}" width="150px">
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
        let editor;

        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .then( newEditor => {
                editor = newEditor;
            } )
            .catch( error => {
                console.error( error );
            } );

        const { id } = parseRequesUrl();
        const { data: news } = await NewApi.get(id);



        $("#btnUpdate").addEventListener('click', async () => {
            var content = editor.getData();

            if ($("#product-image").value != "") {
                const productImage = $('#product-image').files[0];
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(function (){
                    storageRef.getDownloadURL().then( async (url) => {
                        var imageUrl = url;
                        var data = {
                            title: $('#title').value,
                            content: content,
                            image: imageUrl
                        }
                        await NewApi.update(id, data);
                        alert("Update new ok")
                        window.location.hash = "/adminnew"
                    }) 
                })
            }else{
                var data = {
                    title: $('#title').value,
                    content: content,
                    image: news.image
                }
                await NewApi.update(id, data);
                alert("Update new ok")
                window.location.hash = "/adminnew"
            }

           
        })
    }

}
export default UpdateNew;