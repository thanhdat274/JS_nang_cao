import { getProInCate } from "../../../Api/products";
import Footer from "../../views/footer";
import Header from "../../views/header";

const ProductList = {
    async render(id) {
        const { data } = await getProInCate(id);
        return /* html */`
        ${await Header.render()}
        <main class="mt-[10px]">
            <div class="max-w-[1440px] mx-auto">
                <div class="w-[1440px] py-[10px] flex border-b-2 border-[#f2f2f2]">
                    <div class="mx-2 text-[#5d5f6c]">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div class="text-yellow-500">
                        <a href="/blog" class="text-yellow-500 font-semibold">Quay lại trang</a>
                    </div>
                    <div class="mx-2 text-[#5d5f6c]">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    <div class="text-yellow-500 font-semibold">
                        ${data.title}
                    </div>
                </div>
                <div class="my-[20px]">
                    <div class="grid grid-cols-5 gap-8">
                    ${data.products.map((posts) => /* html */ `
                        <div class="border p-3">
                            <a href="/products/${posts.id}">
                                <img src="${posts.img}" alt="" class="w-[250px] h-[250px]"/>
                            </a>
                            <h3 class="my-3"><a href="/products/${posts.id}" class="font-semibold text-lg">${posts.name}</a></h3>
                            <p class="text-[red] font-semibold text-[16px]">${posts.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                        </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `;
    },
};
export default ProductList;