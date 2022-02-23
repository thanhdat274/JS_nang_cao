import Navigo from "navigo";
import AdminListCate from "./admin/business/category";
import AddCatePage from "./admin/business/category/add";
import EditCatePage from "./admin/business/category/edit";
import AdminListNew from "./admin/business/news";
import AddNewPage from "./admin/business/news/add";
import EditNewPage from "./admin/business/news/edit";
import AdminListProduct from "./admin/business/product";
import AddProductPage from "./admin/business/product/add";
import EditProductPage from "./admin/business/product/edit";
import AdminListUser from "./admin/business/users";
import AddUsersPage from "./admin/business/users/add";
import EditUserPage from "./admin/business/users/edit";
import AdminDashboard from "./admin/views";
import Blog from "./client/business/blog";
import detailBlog from "./client/business/detailBlog";
import HomePage from "./client/business/home";
import cartPage from "./client/business/product/cart";
import ProductDetail from "./client/business/product/productDetail";
import ProductList from "./client/business/product/productList";
import Signin from "./client/business/signin";
import Signup from "./client/business/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("content").innerHTML = await content.render(id);

    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).roleId;
            if (userId === "admin") {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});

router.on({
    // phần user
    "/": () => {
        print(HomePage);
    },
    "/signin": () => {
        print(Signin);
    },
    "/signup": () => {
        print(Signup);
    },
    "/blog": () => {
        print(Blog);
    },
    "/blog/:id": ({ data }) => {
        const { id } = data;
        print(detailBlog, id);
    },
    "/categoryProducts/:id": ({ data }) => {
        const { id } = data;
        print(ProductList, id);
    },
    "/products/:id": ({ data }) => {
        const { id } = data;
        print(ProductDetail, id);
    },
    "/cart": () => {
        print(cartPage);
    },
    //-------------------------------

    // phần admin
    "/admin": () => {
        print(AdminDashboard);
    },

    // phần danh mục
    "/admin/category": () => {
        print(AdminListCate);
    },
    "/admin/category/add": () => {
        print(AddCatePage);
    },
    "/admin/category/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditCatePage, id);
    },
    //-------------------

    // phần sản phẩm
    "/admin/product": () => {
        print(AdminListProduct);
    },
    "/admin/product/add": () => {
        print(AddProductPage);
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditProductPage, id);
    },
    //-------------------

    // phần user
    "/admin/user": () => {
        print(AdminListUser);
    },
    "/admin/user/add": () => {
        print(AddUsersPage);
    },
    "/admin/user/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditUserPage, id);
    },
    //-------------------

    // phần bài viết
    "/admin/news": () => {
        print(AdminListNew);
    },
    "/admin/news/add": () => {
        print(AddNewPage);
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditNewPage, id);
    },
    //------------------

    //------------------
});
router.resolve();