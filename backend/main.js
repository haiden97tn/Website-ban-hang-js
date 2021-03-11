import { data } from './data.js';
console.log(data);


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class Product {
    listProduct() {
        var result = data.map(({ id, name, image, price, status, quantity }, index) => {
            return `
                <tr class="row-${id}">
                    <td>${index}</td>
                    <td>${name}</td>
                    <td><img src="${image}" width=50/></td>
                    <td>${price}</td>
                    <td>${status ? "Còn hàng" : "Hết hàng"}</td>
                    <td>${quantity}</td>
                    <td>
                        <button data-id="${id}" class="btn btn-primary btn-detail">
                            Detail
                        </button>
                        <button data-id="${id}"  class="btn btn-dark btn-delete">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        }).join(" ");

        $('#product-content').innerHTML = result;
    }


    detailProduct(id) {
        console.log("Em ", id);
        var newData = data.find(e => {
            return e.id == id;
        })
        console.log(newData);

        $('#content2').innerHTML = `
            <h4>Ten san pham: ${newData.name}</h4>
            <div>Gia: <span>${newData.price}</span></div>
            <div>Status: "<span>${newData.status ? 'Con hang' : 'Het hang'} "</span></div>
            <div>So luong: <span>${newData.quantity}</span></div>
            <img src="${newData.image}" width=50px />
        `;
    }
    deleteProduct(id) {
        data.splice(id, 1);
        console.log(data);
        let element = $(".row-" + id);
        element.parentNode.removeChild(element);
    }

    getButton() {
        const buttons = $$('.btn');
        let _this = this;
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (button.classList.contains('btn-detail')) {
                    const { id } = this.dataset;
                    _this.detailProduct(id);
                } else if (button.classList.contains('btn-delete')) {
                    const { id } = this.dataset;
                    _this.deleteProduct(id);
                }
            });
        })
    }

    addProduct() {
        $('#btnNews').addEventListener('click', addPro);
        const newThis = this;


        function addPro(e) {
            e.preventDefault();
            var idPro = $("#idPro");
            var namePro = $("#namePro");
            var imagePro = $("#imagePro");
            var pricePro = $("#pricePro");
            var statusPro = $("#statusPro");
            var quantityPro = $("#quantityPro");

            var newPro = {
                "id": idPro.value,
                "name": namePro.value,
                "image": imagePro.value,
                "price": pricePro.value,
                "status": statusPro.value,
                "quantity": quantityPro.value
            };
            data.push(newPro);
            console.log(data);
            $('#product-content').innerHTML += `<tr class="row-${newPro.id}">
                                                    <td>${newPro.id}</td>
                                                    <td>${newPro.name}</td>
                                                    <td><img src="${newPro.image}" width=50/></td>
                                                    <td>${newPro.price}</td>
                                                    <td>${newPro.status}</td>
                                                    <td>${newPro.quantity}</td>
                                                    <td>
                                                        <button data-id="${newPro.id}" class="btn btn-primary btn-detail">
                                                            Detail
                                                        </button>
                                                        <button data-id="${newPro.id}"  class="btn btn-dark btn-delete">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            `;
            newThis.getButton();
        }
    }
}



window.addEventListener('DOMContentLoaded', () => {
    const product = new Product();
    product.addProduct();
    product.listProduct();
    product.getButton();
})