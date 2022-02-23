// import { signup } from "../../Api/posts";
import "toastr/build/toastr.min.css";
import Header from "../views/header";
import Footer from "../views/footer";
import { getAll } from "../../Api/posts";

const Blog = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
            ${await Header.render()}
            <main class="my-[10px]">
                <div class="w-[1440px] h-auto mx-auto">
                    <div class="w-[980px] h-auto mx-auto">
                        <div class="w-[980px] py-[20px]">
                            <h1 class="text-center uppercase text-[28px]">Tin tức công nghê</h1>
                            <p class="text-[14px] w-[560px] h-[20px] text-center mx-auto">Nơi tổng hợp những thông tin nóng hổi nhất về thế giới Điện thoại, Máy tính bảng, SmartHome, PC, Laptop và những thiết bị công nghệ mới nhất.</p>
                        </div>
                        <div class="w-[980px] mt-[30px]">
                            ${data.map((post) => /* html */ `
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
            </main>
            ${Footer.render()}
        `;
    },
    afterRender() {

    },
};
export default Blog;