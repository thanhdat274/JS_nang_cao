import { getAll, remove } from "../../../Api/products";
import { reRender } from "../../../utils/rerender";
import { $ } from "../../../utils/selector";
import NavAdmin from "../../views/nav";

const AdminListProduct = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate uppercase">
                            Quản lý sản phẩm
                        </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/product/add" class="sm:ml-3">
                            <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                ID
                                                </th>
                                                <th scope="col" class="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                tên sản phẩm
                                                </th>
                                                <th scope="col" class="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                hình ảnh
                                                </th>
                                                <th scope="col" class="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                giá
                                                </th>
                                                <th scope="col" class="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                số lượng
                                                </th>
                                                <th scope="col" class="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                mô tả
                                                </th>
                                                <th scope="col" class="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                        ${data.map((post) => /* html */ `
                                            <tr>
                                                <td class="px-9 py-4 whitespace text-sm text-gray-500">${post.id}</td>
                                                <td class="px-6 py-4 whitespace">
                                                    <div class="flex items-center">
                                                        ${post.name}
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace w-[200px]">
                                                    <div class="flex items-center ">
                                                        <img src="${post.img}" alt="" class="w-[200px] h-[80px]">
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace">
                                                    <div class="flex items-center">
                                                        ${post.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace">
                                                    <div class="flex items-center">
                                                        ${post.quantity.toLocaleString("it-IT")}
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace">
                                                    <div class="flex items-center">
                                                        <textarea  rows="10" cols="100" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">${post.desc}</textarea>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <a href="/admin/product/${post.id}/edit" class="text-amber-500 hover:text-amber-600 mx-[10px]">EDIT</a>
                                                        <button data-id="${post.id}" class="btn text-red-500 hover:text-red-600 mx-[10px]">DELETE</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        `).join("")}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        const btns = $(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", async () => {
                const confirm = window.confirm("Bạn có chắc chắn không??");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(AdminListProduct, "#content");
                    });
                }
            });
        });
    },
};
export default AdminListProduct;