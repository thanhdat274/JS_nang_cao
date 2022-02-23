import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { get, getAll } from "../../../Api/products";
import { addToCart } from "../../../utils/cart";
import Footer from "../../views/footer";
import Header from "../../views/header";

const ProductDetail = {
    async render(id) {
        const { data } = await get(id);
        const data2 = await getAll();
        return /* html */`
        ${await Header.render()}
        <main class="my-[20px]">
            <div class="w-[1440px] h-auto mx-auto">
                <div class="w-[1080px] h-auto mx-auto">
                    <div class="w-[1080px] py-[10px] flex border-b-2 border-[#f2f2f2]">
                        <div class="text-yellow-500">
                            <a href="/" class="text-yellow-500 font-semibold">Trang chủ</a>
                        </div>
                        <div class="mx-2 text-[#5d5f6c]">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        <div class="text-yellow-500 font-semibold">
                            Chi tiết sản phẩm
                        </div>
                        <div class="mx-2 text-[#5d5f6c]">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        <div class="text-yellow-500 font-semibold">
                            ${data.name}
                        </div>
                    </div>
                    <div class="w-[1080px] h-auto flex justify-between mt-[20px]">
                        <div class="w-[500px] h-[500px] mr-[20px] border">
                            <div>
                                <img src="${data.img}" alt="" class="w-[500px] h-[500px]">
                            </div>
                        </div>
                        <div class="w-[460px]">
                            <div class="text-[30px] font-semibold mb-3 w-[460px]">
                                ${data.name}
                            </div>
                            <div class="text-[#51545f] mb-[20px] w-[460px]">
                                <h1 class="text-[21px] font-medium">Thông tin chung:</h1>
                                <div class="font-medium text-[16px] break-words">${data.short_desc}</div>
                            </div>
                            <div class="text-[#fe4c50] font-semibold text-2xl mb-5">
                                ${data.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                            </div>
                            <div class="flex">
                                <div class="text-[#1e1e27] mt-1">
                                    Số lượng:
                                </div>
                                <div class="mx-3 border h-[40px] w-[120px] flex justify-around">
                                    <input type="number" id="inputValue" value="1" class="w-10 text-center mx-2">
                                </div>
                            </div>
                            <div class="mt-8">
                                <button data-id="${data.id}" id="btnAddToCart" class="bg-orange-400 h-10 w-44 rounded-sm text-white">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[1080px] h-auto mx-auto ">
                    <div class="text-[#5d5f6c] text-2xl font-medium mt-[50px] uppercase border-b-2 border-[#f2f2f2]">
                        thông tin chi tiết sản phẩm
                    </div>
                    <div class="w-[1080px] my-[20px]">
                        ${data.desc}
                    </div>
                </div>
                <div class="w-[1080px] h-auto mx-auto">
                    <div class="text-[#5d5f6c] text-2xl font-medium mt-14 uppercase border-b-2 border-[#f2f2f2]">
                        Sản phẩm liên quan
                    </div>
                    <div class="w-[1080px] my-[20px]">
                        <div class="my-[20px]">
                            <div class="grid grid-cols-4 gap-8">
                            ${data2.data.slice(0, 8).map((item) => {
        if (item.categoryProductId === data.categoryProductId) {
            return `
                <div class="border p-3">
                    <a href="/products/${item.id}">
                        <img src="${item.img}" alt="" class="w-[250px] h-[250px]"/>
                    </a>
                    <h3 class="my-3"><a href="/products/${item.id}" class="font-semibold text-lg ">${item.name}</a></h3>
                    <p class="text-[red] font-semibold text-[16px]">${item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                </div>
                `;
        }
    }).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `;
    },
    afterRender() {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const a = btnAddToCart.dataset.id;

        btnAddToCart.addEventListener("click", async () => {
            if (!localStorage.getItem("user")) {
                toastr.error("Bạn cần đăng nhập để mua hàng !");
            } else {
                const inputValue = document.querySelector("#inputValue").value;
                const { data } = await get(a);
                addToCart({ ...data, quantity: Number(inputValue) }, () => {
                    toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
                });
            }
        });
    },
};
export default ProductDetail;