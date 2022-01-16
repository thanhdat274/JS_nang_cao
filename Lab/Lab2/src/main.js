import Navigo from "navigo";
import Header from "./components/header";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import NewPage from "./pages/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewPage.render(id));
    },
});
router.resolve();