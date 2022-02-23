import { getAll } from "../../Api/products";
import Banner from "../views/banner";
import Footer from "../views/footer";
import Header from "../views/header";

const HomePage = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        ${await Header.render()}
        <main class="mt-[10px]">
            ${Banner.render()}
            <div class="max-w-[1440px] mx-auto">
                <div class="my-[20px]">
                    <h2 class="font-semibold text-2xl uppercase my-[30px] text-center">Tất cả Sản phẩm</h2>
                    <div class="grid grid-cols-5 gap-8">
                        ${data.slice(0, 25).map((product) => /* html */ `
                        <div class="border p-3">
                            <a href="/products/${product.id}">
                                <img src="${product.img}" alt="" class="w-[250px] h-[250px]"/>
                            </a>
                            <h3 class="my-3"><a href="/products/${product.id}" class="font-semibold text-lg ">${product.name}</a></h3>
                            <p class="text-[red] font-semibold text-[16px]">${product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                        </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `;
    },
    afterRender() {

    },
};

export default HomePage;