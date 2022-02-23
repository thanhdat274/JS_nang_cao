import axios from "axios";
import toastr from "toastr";
import { add } from "../../../Api/posts";
import NavAdmin from "../../views/nav";
import "toastr/build/toastr.min.css";
import { $ } from "../../../utils/selector";

const AddNewPage = {
    render() {
        return /* html */`
        <div class="min-h-full">
        ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate uppercase">
                                thêm mới tin tức
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
                                        <label class="block text-sm font-medium text-gray-700">Tiêu đề <span class="text-[red]">*</span></label>
                                        <input type="text" id="title-post" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">Nội dung ngắn <span class="text-[red]">*</span></label>
                                        <div class="mt-1">
                                            <textarea  rows="4" id="short-desc-post" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">Nội dung <span class="text-[red]">*</span></label>
                                        <div class="mt-1">
                                            <textarea  rows="5" id="desc-post" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">
                                        Hình ảnh <span class="text-[red]">*</span>
                                        </label>
                                        <img src="" id="img-preview" class="w-[240px] h-[140px]"/>
                                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div class="space-y-1 text-center">
                                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                                            aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <div class="flex text-sm text-gray-600">
                                            <label class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                            </div>
                                            <p class="text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <a href="/admin/news" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hủy</a>
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
        const CLOUDINARY_PRESET_KEY = "js8yqruv";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dvj4wwihv/image/upload";
        const imgPreview = $("#img-preview");
        const imgPost = $("#file-upload");

        let imgLink = "";
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const file = $("#file-upload").files[0];
                if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
                    const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                        headers: {
                            "Content-Type": "application/form-data",
                        },
                    });
                    imgLink = data.url;
                }
                add({
                    title: $("#title-post").value,
                    img: imgLink || imgPreview.src,
                    desc: $("#desc-post").value,
                    short_desc: $("#short-desc-post").value,
                });
                toastr.success("Thêm mới bài viết thành công, chuyển trang sau 2s");
                setTimeout(() => {
                    document.location.href = "/admin/news";
                }, 2000);
            } catch (error) {
                toastr.error(error.response.data);
                $("#formAdd").reset();
            }
        });
    },
};
export default AddNewPage;