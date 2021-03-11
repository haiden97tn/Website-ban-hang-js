const SidebarMenu = {
    render(){
        return /*html*/`
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
                <ul class="menuNav nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="/#/listproduct">
                            <span data-feather="shopping-cart"></span> Products
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/adminuser">
                            <span data-feather="users"></span> Users
                        </a>
                    </li>                    
                    <li class="nav-item">
                        <a class="nav-link" href="/#/admincategory">
                            <span data-feather="users"></span> Category
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/adminnew">
                            <span data-feather="users"></span> News
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/admincontact">
                            <span data-feather="users"></span> Contact
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/adminorder">
                            <span data-feather="users"></span> Order
                        </a>
                    </li>
                </ul>
                
            </div>
        </nav>
        `
    }
} 

export default SidebarMenu;