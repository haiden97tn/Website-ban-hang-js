import NewApi from "../../api/NewApi";
import Header from "../../components/Header";

const News = {
    async render(){
        await Header.afterRender();

        const { data: news } = await NewApi.getAll();
        // console.log(news)
        const result = news.map( x => {
            return /*html*/`
                <div class="pb-16 pt-10 grid grid-cols-10 gap-5">
                    <div class="pl-16 col-span-3">
                    <a href="#"><img src="${x.image}" width="300px" alt=""></a>
                    </div>
                    <div class="col-span-7 pr-20">
                        <a href="#/newsdetail/${x.id}"><h3 class="text-2xl font-bold">${x.title}</h3></a> 
                        <p>${ (x.content).slice(0, 300) }</p>
                    </div>
                </div>
            `
        })
        return /*html*/`
            
            <div class="mt-48 container mx-auto">
            <div class="grid grid-cols-10 gap-5">
                <div class="col-span-8 ">
                    <h2 class="pb-16 text-4xl font-bold">TIN TỨC</h2>
                    <hr >
                    ${result}
                </div>
                <div class="col-span-2 ">
                    <h2 class="pb-14 text-4xl font-bold">XEM NHIỀU</h2>
                    <div class="pb-11">
                        <a href="#"><img src="https://www.remoingay.com/uploads/news/news_thumb/20160829140835_58329.jpg" alt=""></a>
                        <p>Mặc đầm ôm body thế nào cho thật quyến rũ</p>
                    </div>
                    <div class="pb-11">
                        <a href="#"><img src="https://www.remoingay.com/uploads/news/news_thumb/20160808140856_26892.jpg" alt=""></a>
                        <p>Phối quần tây nam theo phong cách thời trang Hàn Quốc</p>
                    </div>
                    <div class="pb-11">
                        <a href="#"><img src="https://www.remoingay.com/uploads/news/news_thumb/20160812150843_36451.jpg" alt=""></a>
                        <p>6 cách phối Sơ mi denim, trang phục giúp nam giới mạnh mẽ hơn</p>
                    </div>
                    <div class="pb-11">
                        <a href="#"><img src="https://www.remoingay.com/uploads/news/news_thumb/20160829130856_20237.jpg" alt=""></a>
                        <p>Top 5 mẫu áo khoác da nữ xịn đẹp được ưa thích nhất</p>
                    </div>
                </div>
            </div>
            <div>
                <img class="w-full" src="https://www.vlance.vn/uploads/portfolio/view/f4a5cc5094bafd029e8d3b8f3e24ba08e8e8ffcd1.png" alt="">
            </div>
        </div>
        `
    },
    afterRender(){
        
    }
}

export default News;
