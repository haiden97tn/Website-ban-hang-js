
import SidebarMenu from "../SidebarMenu.js";
import { $ } from "../../utils.js";
import firebase from "firebase";
import NewApi from "../../api/NewApi.js";

const AddNew = {
    render(){
        return /*html*/`
        <div class="container pt-36 mt-5">
            <div class="row">
            ${ SidebarMenu.render()}

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Add new </h1>
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
                                        <td>Title</td>
                                        <td>
                                            <textarea name="" id="title" cols="90" rows="5"></textarea>
                                        </td>   
                                    </tr>
                                    <tr>
                                        <td>Content</td>
                                        <td>
                                            <textarea id="editor"    cols="90" rows="10"></textarea>
                                        </td>
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

        $("#btnNews").addEventListener('click', async () => {

            var idNew = Math.floor(Math.random() * 1000) + 1;
            var title = $('#title');
            var content = editor.getData();


            // var imagePro = $('#imagePro');
            if ($("#product-image").value != "" && title.value != "" && content.value != ""){
                const productImage = $('#product-image').files[0];
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(  () => {
                    storageRef.getDownloadURL().then( async (url) => {
                        var imageUrl = url;
                        var body = {
                            id: idNew,
                            title: title.value,
                            content: content,
                            image: imageUrl
                        }
                        await NewApi.add(body);
                        alert("Upload new ok")
                        window.location.hash = "/adminnew" ;
                    }) 
                })
            }else{
                alert("Add new false!")
            }

        })
        
    }
}

export default AddNew;