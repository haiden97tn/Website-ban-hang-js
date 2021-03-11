import { $, reRender } from "../../utils.js";
import ListCart from "./ListCart.js";
const Cart = {
    async render() {
        return /*html*/`
            <div  class="pt-36">
                <h2 class="text-center fs-3 pb-5 pt-5">Tiến hành thanh toán</h2>
                <div class="container"> 
                <table id="cart" class="table table-hover table-condensed"> 
                <thead> 
                <tr> 
                    <th style="width:40%">Tên sản phẩm</th> 
                    <th style="width:10%">Giá</th> 
                    <th style="width:8%">Số lượng</th> 
                    <th style="width:22%" class="text-center">Thành tiền</th> 
                    <th style="width:10%">Update</th>
                    <th style="width:10%"><button id="delAll" class="btn btn-danger">Delete All</button></th> 
                </tr> 
                </thead> 
                <tbody id="tbody">
                    ${ await ListCart.render() }
                </tbody>
                <tfoot>
                    <table class="ml-96 w-2/4 ">
                        <form>
                            <div class="mb-3 w-1/3 ml-96 text-3xl">Thông tin khách hàng</div>
                            <div class="mb-3 w-1/3 ml-96">
                                <label for="exampleInputEmail1" class="form-label">Fullname </label>
                                <input type="text" class="form-control" id="fullname" aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3 w-1/3 ml-96">
                                <label for="exampleInputEmail1" class="form-label">Email </label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3 w-1/3 ml-96">
                                <label for="exampleInputPassword1" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address">
                            </div>

                            <a href="#/register"><button type="submit" class="btn btn-primary w-1/3 ml-96">Click if you want Register</button></a>
                        </form>
                    </table>
                </tfoot>
                </table>
                </div>
            </div>
        `
    },
    async afterRender() { 
          return `${ await ListCart.afterRender()}`
        
    }
}

export default Cart;