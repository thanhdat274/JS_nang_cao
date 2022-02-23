import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../../../utils/cart";
import { reRender } from "../../../utils/rerender";
import Footer from "../../views/footer";
import Header from "../../views/header";

const cartPage = {
    async render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`
        ${await Header.render()}
        <main class="my-[20px]">
            <div class="w-[1280px] py-[10px] flex border-b-2 border-[#f2f2f2] mx-auto">
                <div class="text-yellow-500">
                    <a href="/" class="text-yellow-500 font-semibold">Trang chủ</a>
                </div>
                <div class="mx-2 text-[#5d5f6c]">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
                <div class="text-yellow-500 font-semibold">
                    Giỏ hàng
                </div>
            </div>
            <div class="w-[1280px] mx-auto">
                <div class="my-[20px]">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Giỏ hàng của bạn 
                    </h2>
                </div>
                <div class="flex flex-col">
                    <div class="my-2">
                        <div class="py-2 align-middle inline-block w-[1280px]">
                            <div class="shadow overflow-hidden border-b border-gray-200">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Hình ảnh
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                tên sản phẩm
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Số lượng sản phẩm
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Giá sản phẩm
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tổng giá
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        ${cart.map((post) => /* html */`
                                            <tr>
                                                <td class="px-6 py-4">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 h-[150px] w-[150px]">
                                                            <img class="h-[150px] w-[150px]" src="${post.img}" alt="">
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="text-sm text-gray-900"> ${post.name} </div>
                                                </td>
                                                <td class="px-6 py-4 flex">
                                                    <span class="px-6 py-12 text-right text-sm font-medium flex">
                                                        <button data-id="${post.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded btn-decrease">-</button>
                                                        <div class="px-4 py-4 text-sm text-gray-900 border"> ${post.quantity} </div>
                                                        <button data-id="${post.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded btn-increase"><a href="">+</a></button>
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="text-sm text-gray-900"> ${post.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })} </div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="text-sm text-gray-900">${(post.price * post.quantity).toLocaleString("vi-VN", { style: "currency", currency: "VND" })} </div>
                                                </td>
                                            </tr>
                                        `).join("")}
                                        <tr class="grid-cols-6">
                                            <td colspan="4" class="px-6 py-4">
                                                <div class="text-center uppercase">
                                                    thành tiền:
                                                </div>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="text-center" id="sumPrice">
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <!-- More people... -->
                                    </tbody>
                                </table>
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
        const btns = document.querySelectorAll(".btn");
        btns.forEach((button) => {
            button.addEventListener("click", () => {
                const a = button.dataset.id;
                if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(a, () => {
                        reRender(cartPage, "#content");
                    });
                } else if (button.classList.contains("btn-increase")) {
                    increaseQuantity(a);
                } else {
                    removeItemInCart(a, () => {
                        reRender(cartPage, "#content");
                    });
                }
            });
        });
    },
};
export default cartPage;