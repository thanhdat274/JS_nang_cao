// import axios from "axios";
import toastr from "toastr";
import { add } from "../../../Api/cates";
import NavAdmin from "../../views/nav";
import "toastr/build/toastr.min.css";
import { $ } from "../../../utils/selector";

const AddCatePage = {
    render() {
        return /* html */`
        <div class="min-h-full">
        ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate uppercase">
                                thêm mới danh mục
                            </h2>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="md:grid md:grid-cols-3 md:gap-6 ">
                        <div class="mt-5 md:mt-0 md:col-span-3 border">
                            <form id="formAdd">
                                <div class="shadow sm:rounded-md sm:overflow-hidden">
                                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div class="col-span-6">
                                            <label class="block text-sm font-medium text-gray-700">Tên danh mục <span class="text-[red]">*</span></label>
                                            <input type="text" id="title-cate" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <a href="/admin/category" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hủy</a>
                                        <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm mới</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div> 
        `;
    },
    afterRender() {
        const formAdd = $("#formAdd");
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await add({
                    title: $("#title-cate").value,
                });
                if ({ data }) {
                    toastr.success("Thêm mới danh mục thành công, chuyển trang sau 1s");
                    setTimeout(() => {
                        document.location.href = "/admin/category";
                    }, 1000);
                }
            } catch (error) {
                toastr.error(error.response.data);
                $("#formAdd").reset();
            }
        });
    },
};
export default AddCatePage;