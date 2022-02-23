import Header from "../views/header";
import Footer from "../views/footer";
import { get, getAll } from "../../Api/posts";

const detailBlog = {
    async render(id) {
        const { data } = await get(id);
        const ListNew = await getAll();
        return /* html */`
        ${await Header.render()}
        <main class="my-[10px]">
            <div class="w-[1440px] h-auto mx-auto">
                <div class="w-[980px] h-auto mx-auto">
                    <div class="w-[980px] py-[20px]">
                        <div class="w-[980px] py-[10px] flex border-b-2 border-[#f2f2f2]">
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
                        <h1 class="text-center uppercase text-[28px] mt-[20px]">${data.title}</h1>
                    </div>
                    <div class="w-[980px] h-auto mt-[30px]">
                        <div class="w-[980px] mb-[20px]">
                            <img src="${data.img}" alt="" class=" w-[980px] h-[550px]">
                            <div class="mt-[20px] w-[800px] mx-auto">
                                ${data.desc}
                            </div>
                        </div>
                        <div  class="w-[980] my-[20px]">
                            <h1 class="text-[27px]">Tin tức công nghê khác</h1>
                            <div class="w-[980px] mt-[30px]">
                                ${ListNew.data.map((post) => /* html */ `
                                <div class="w-[980px] h-[160px] mb-[20px]">
                                    <article class="flex">
                                        <div class="w-[300px] h-[160px] mr-[20px]">
                                            <a href="/blog/${post.id}">
                                                <img src="${post.img}" alt="" class="rounded-[8px] w-[300px] h-[160px]">
                                            </a>
                                        </div>
                                        <div class="w-[660px] h-[160px]">
                                            <h3 class="text-[25px] mr-[10px]"><a href="/blog/${post.id}">${post.title}</a></h3>
                                            <p class="mt-[10px] mr-[10px]">${post.short_desc}</p>
                                        </div>
                                    </article>
                                </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `;
    },
};
export default detailBlog;