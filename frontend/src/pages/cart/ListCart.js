import CartApi from "../../api/CartApi.js";
import { $, reRender } from "../../utils.js";

const ListCart = {
    async render() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                // console.log(`${key} => ${localStorage.getItem(key)}`);
                var listPro = `${localStorage.getItem(key)} `;

                var listPro1 = JSON.parse(listPro);

                var result = listPro1.map(x => {


                    return /*html*/`
                    <tr > 
                        <td data-th="Product"> 
                            <div class="row"> 
                            <div class="col-sm-2 hidden-xs"><img src="${x.image}" alt="Sản phẩm 1" class="img-responsive" width="100">
                            </div> 
                            <div class="col-sm-10"> 
                            <h4 class="nomargin pt-4">${x.name}</h4> 
                            <p>Mô tả của sản phẩm </p> 
                            </div> 
                            </div> 
                        </td> 
                        <td class="pt-5" data-th="Price">${x.price}</td> 
                        <td data-th="Quantity" class="inline-flex py-5">
                            <input class="text-center btnCount"   value="${x.count}"  type="number" min="1"  >
                        </td> 
                        <td data-th="Subtotal" class="text-center pt-5">${x.price * x.count}</td> 
                        <td>
                            <button data-set="${x.id}" class="btn btn-primary btnCapnhat mt-4" >Update</button>
                        </td>
                        
                        <td class="actions" data-th="">
                            <button data-id="${x.id}"  class="btn btn-danger btn-remove mt-4">X</button>
                        </td> 
                    </tr> 
                    `
                })


            }

            // tong tien

            var total = 0;
            for(var i = 0; i < listPro1.length; i++){
                total += (listPro1[i].count * listPro1[i].price) 
            }
            // end tong tien


            var result2 = /*html*/`
                ${result}


                <tr> 
                    <td><a href="" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue buy</a>
                    </td> 
                    <td colspan="2" class="hidden-xs"> </td> 
                    
                    <td class="hidden-xs text-center" colspan="2" ><strong>Total: $ <input type="text" id="total" readonly value="${total}">  </strong>
                    </td> 
                    
                    <td>
                        <button type="button" class="btnPay btn btn-success">Payment</button>
                    </td> 
                </tr>
                
            `
        }else{
            var result2 = [];
            alert("The cart is empty")
        }

        return result2
    },
    async afterRender() {
        

       

        //Add to cart

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            var listPro = `${localStorage.getItem(key)} `;
            var listPro1 = JSON.parse(listPro);
        }

      


        var removeByAttr = function (listPro1, attr, value) {
            var i = listPro1.length;
            while (i--) {
                if (listPro1[i]
                    && listPro1[i].hasOwnProperty(attr)
                    && (arguments.length > 2 && listPro1[i][attr] === value)) {

                    listPro1.splice(i, 1);

                }
            }
            return listPro1;
        }


        const btns = $('#tbody .btn-remove');

        if (listPro1.length > 1) {
            btns.forEach(btn => {
                const id = btn.dataset.id;
                btn.addEventListener('click', async function (e) {
                    if (btn.classList.contains('btn-remove')) {
                        const question = confirm("Bạn có muốn xóa không?");
                        if (question) {
                            removeByAttr(listPro1, 'id', id)
                            localStorage.setItem("shopcart", JSON.stringify(listPro1));
                            await reRender(ListCart, '#tbody');

                        }
                    }
                })
            })
        } else if (listPro1.length == 1) {
            const btn = $(".btn-remove");
            btn.addEventListener('click', async () => {
                localStorage.removeItem("shopcart");
                await reRender(ListCart, '#tbody');
            })
        }


        $("#delAll").addEventListener("click", async () => {
            localStorage.removeItem("shopcart");
            await reRender(ListCart, '#tbody');
        })

    // The end Add to cart
    
    // Thanh toan
    var btnPay = $(".btnPay");
         
         
        btnPay.addEventListener('click', async () => {
        var fullname = $("#fullname");
        var email = $("#email");
        var address = $("#address");
        var total = $("#total");

        var id = Math.floor(Math.random() * 100) + 1;
        
        if(fullname.value != "" && email.value != "" && address.value != "" ){
            var dataCart = {
                id : id,
                list : listPro1,
                total : total.value,
                fullname : fullname.value,
                email : email.value,
                address : address.value
            }
            const question = confirm("Xác nhận đặt hàng ?");
            if(question){
                await CartApi.add(dataCart);
                alert("Đặt hàng thành công")
                localStorage.clear();
                window.location.hash = "/"
            }
        }else{
            alert("Fill out the form !!!")
        }
        
       
            
            
            

        })
    
    //End thanh toan

    //   Update cart

        const btnCapnhat = $('.btnCapnhat');
        
        if(btnCapnhat.length > 1){
            btnCapnhat.forEach( btn => {
                const id = btn.getAttribute('data-set')
                btn.addEventListener('click',async function(e){
                    if(btn.classList.contains('btnCapnhat')){
                        const parentPro = btn.parentNode.parentNode.childNodes[5].children[0].value;
                        for(var i = 0; i < listPro1.length; i++){
                            var idCart = listPro1[i];
                            if(idCart.id == id){
                                listPro1[i].count = parentPro;
                            }
                        }
                        // console.log(listPro1)
                        localStorage.setItem("shopcart", JSON.stringify(listPro1));
                        window.location.reload();
                    }
                })
            })    
        }else{
            const id = btnCapnhat.getAttribute('data-set')
            btnCapnhat.addEventListener('click',async function(e){
                if(btnCapnhat.classList.contains('btnCapnhat')){
                    const parentPro = btnCapnhat.parentNode.parentNode.childNodes[5].children[0].value;
                    for(var i = 0; i < listPro1.length; i++){
                        var idCart = listPro1[i];
                        if(idCart.id == id){
                            listPro1[i].count = parentPro;
                        }
                    }
                    // console.log(listPro1)
                    localStorage.setItem("shopcart", JSON.stringify(listPro1));
                    window.location.reload();
                }
            })
        }
        

    //     End update cart

   
        

    }
}
export default ListCart;