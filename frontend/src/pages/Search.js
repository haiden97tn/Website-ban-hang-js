
import ProductApi from "../api/ProductApi.js";
import Header from "../components/Header.js";
import { $ } from "../utils.js";

const Search = {
    async render(){
        return /*html*/`
            <div class="container pt-36">
                <div class="fs-2 pb-3">Result search: </div>
                <div class="row fs-3">
                    <div class="col">Name</div>
                    <div class="col">Price</div>
                    <div class="col">Image</div>
                </div>
                <hr>

                <div id="result-search" class="row">
                    ${ await Header.afterRender() }
                </div>
            </div>
        `
    },
    async afterRender(){
       
    }

}
export default Search;