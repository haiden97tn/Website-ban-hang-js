import Error404Page from './pages/Error404Page.js';
import HomePage from './pages/HomePage.js';



import { parseRequesUrl } from './utils.js';
import CategoryPage from './pages/CategoryPage.js';

import Contact from './pages/Contact.js';
import Header from './components/Header.js';

import Footer from './components/Footer.js';







import Search from './pages/Search.js';










import Cart from './pages/cart/Cart.js';
import ListCart from './pages/cart/ListCart.js';
import FilterPricePro from './pages/product/FilterPricePro.js';
import ProductDetail from './pages/product/ProductDetail.js';
import ProductPages from './pages/product/ProductPages.js';
import Login from './pages/user/Login.js';
import Register from './pages/user/Register.js';
import News from './pages/news/News.js';
import Newsdetail from './pages/news/Newsdetail.js';
import AdminProductPage from './components/product/AdminProductPage.js';
import NewProduct from './components/product/NewProduct.js';
import UpdateProduct from './components/product/UpdateProduct.js';
import AddCategory from './components/category/AddCategory.js';
import AdminCategory from './components/category/AdminCategory.js';
import UpdateCategory from './components/category/UpdateCategory.js';
import ListCategory from './components/category/ListCategory.js';
import AddNew from './components/news/AddNew.js';
import UpdateNew from './components/news/UpdateNew.js';
import ListNew from './components/news/ListNew.js';
import AdminNew from './components/news/AdminNew.js';
import ListContact from './components/contact/ListContact.js';
import AdminContact from './components/contact/AdminContact.js';
import AdminOrder from './components/order/AdminOrder.js';
import DetailOrder from './components/order/DetailOrder.js';
import AdminUser from './components/user/AdminUser.js';
import ListUsers from './components/user/ListUsers.js';
import UpdateUser from './components/user/UpdateUser.js';
import ProFile from './ProFile.js';

const $ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
}

const routes = {
    '/': HomePage,
    '/products': ProductPages,
    '/products/:id': ProductDetail,
    '/newproduct': NewProduct,
    '/category/:id': CategoryPage,
    '/updateproduct/:id': UpdateProduct,
    '/news': News,
    '/contact': Contact,
    '/listproduct': AdminProductPage,

    '/login': Login,
    '/register': Register,
    '/listusers': ListUsers,
    '/updateuser/:id': UpdateUser,
    '/adminuser': AdminUser,

    '/admincategory': AdminCategory,
    '/addcategory': AddCategory,
    '/updatecategory/:id': UpdateCategory,
    '/listcategory': ListCategory,

    '/search': Search,

    '/adminnew': AdminNew,
    '/listnew': ListNew,
    '/updatenew/:id': UpdateNew,
    '/addnew': AddNew,
    '/newsdetail/:id': Newsdetail,

    '/admincontact': AdminContact,
    '/listcontact': ListContact,

    '/cart': Cart,
    '/listcart': ListCart,

    '/filterpricepro': FilterPricePro,

    '/adminorder': AdminOrder,
    '/detailorder/:id': DetailOrder,

    '/profile': ProFile
}

const router = async () => {
    const { resource, id} = parseRequesUrl();
    const parseUrl = ( resource ? `/${resource}` : '/') +
                     ( id ? '/:id' : '');
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page

    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await page.render();
    $('#footer').innerHTML = await Footer.render();
    await page.afterRender();


}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);