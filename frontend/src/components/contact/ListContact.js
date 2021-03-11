
import ContactApi from "../../api/ContactApi.js";
import { $, reRender } from "../../utils.js";


const ListContact = {
    async render(){
        const { data: contacts } = await ContactApi.getAll() ;
        // console.log(contacts)
        var result = contacts.map( contact => {
            return /*html*/`
                <div class="row pb-3">
                    <div class="col-3">${contact.email}</div>
                    <div class="col-3">${contact.title}</div>
                    <div class="col-3">${contact.message}</div>
                    <div class="col-3">
                        <a href="" class="btn btn-primary">Reply</a>
                        <button data-id="${contact.id}" class="btn btn-danger btn-remove">Remove</button>
                    </div>
                </div>
            `
        }).join("")

        return /*html*/`
            <div class="row pb-3 fs-2">
                <div class="col-3">Email</div>
                <div class="col-3">Title</div>
                <div class="col-3">Message</div>
                <div class="col-3"></div>       
            </div>  
            ${result}
        `
    },
    async afterRender(){
        const btns = $('#list-contact .btn-remove');

        btns.forEach( btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click',async function(e){
                if(btn.classList.contains('btn-remove')){
                    const question = confirm("Bạn có muốn xóa không?");
                    if(question){
                        await ContactApi.remove(id);
                        await reRender(ListContact, '#list-contact');
                    }
                }
            })
        })
    }
}
export default ListContact;