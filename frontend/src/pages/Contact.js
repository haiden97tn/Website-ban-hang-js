import ContactApi from "../api/ContactApi.js";
import Header from "../components/Header.js";
import { $ } from "../utils.js";


const Contact = {
    async render(){
        await Header.afterRender();

        return /*html*/`
            <div class="mt-52 container mx-auto">
            <div class="grid grid-cols-10 gap-8">
                <div class="col-span-5 ">
                    <h2 class="text-5xl font-medium pb-2.5">Get in touch</h2>
                    <p>Please fill out quick form and we will be in touch with lightening speed.</p>
                    <form class="pb-24">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Title</label>
                          <input type="text" class="form-control" id="title">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Message</label>
                            <input type="text" class="form-control" id="message" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text"></div>
                          </div>
                        <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" id="btnSubmit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
                <div class="text-center col-span-5 ">
                    <div class="pb-10">
                        <h2 class="font-bold text-4xl">Connect with us:</h2>
                        <p>For support or any questions</p>
                        <p>Email us at support@gmail.com</p>
                    </div>
                    <div class="pb-10">
                        <h2 class="font-bold text-4xl">Pixpe VietNam</h2>
                        <p>FPT Polytechnic Unnivercity</p>
                        <p>1 Trinh Van Bo Road, Ha Noi</p>
                    </div>
                    <div class="pb-10">
                        <h2 class="font-bold text-4xl">Pixpe USA</h2>
                        <p>VinSchool Univercity</p>
                        <p>30 Hai Ba Trung Road, Ha Noi</p>
                    </div>
    
                </div>
            </div>
            <div class="pb-8 container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044335!2d105.74459841493271!3d21.038127785993257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1614240174380!5m2!1svi!2s" width="100%" height="800" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div >
                <img class="w-full" src="http://erasmusplus.org.ge/files/banner/contact.jpg" alt="">
            </div>
        </div>
        `;
    },
    async afterRender(){
        $("#btnSubmit").addEventListener("click", async (e) => {
            e.preventDefault()
            var idContact = Math.floor(Math.random() * 1000) + 1;
            var body = {
                id: idContact,
                email: $('#email').value,
                title: $('#title').value,
                message: $('#message').value
            }
            console.log(body)
            await ContactApi.add(body);
            alert("Sent contact ok")
        })
    }
}

export default Contact;