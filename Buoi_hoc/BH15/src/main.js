import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminPost from "./pages/admin/posts";
import AddPost from "./pages/admin/posts/add";
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import DetailCategoryPost from "./pages/posts/category";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/products/detal";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("content").innerHTML = await content.render(id);

    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*/", () => {
    console.log("truy cap duong dan admin/*");
}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
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
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/signin": () => {
        print(Signin);
    },
    "/signup": () => {
        print(Signup);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail, id);
    },
    "/category/:id": ({ data }) => {
        const { id } = data;
        print(DetailCategoryPost, id);
    },
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => {
        const { id } = data;
        print(ProductDetailPage, id);
    },
    "/cart": () => print(CartPage),
    "/admin/news": () => {
        print(AdminPost);
    },
    "/admin/news/add": () => {
        print(AddPost);
    },
});

router.resolve();