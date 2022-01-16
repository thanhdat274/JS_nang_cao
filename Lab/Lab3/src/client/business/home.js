import data from "../../data";
import Footer from "../views/footer";
import Header from "../views/header";

const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <div class="py-2 max-w-5xl">
            <img src="https://picsum.photos/1024/300" alt="" class="mx-auto" />
        </div>
        <h2 class="uppercase text-lg font-bold my-4 text-blue-900">Tin tức học tập</h2>
        <div id="title" class="grid grid-cols-3 gap-8 mt-4 mb-4">
        ${data.map((post) => /* html */`
            <div class="border border-gray-400">
                <a href="/news/${post.id}">
                    <img src="${post.img}" alt="" class="ml-[20px] mr-[20px] mt-[15px] mb-[10px]">
                </a>
                <a href="/news/${post.id}">
                    <h3 class="uppercase text-[15px] font-bold ml-[20px] mr-[20px] text-orange-400">${post.title}</h3>
                </a>
                <p class="ml-[20px] mr-[15px] mt-[10px] mb-[20px]">${post.desc}</p>
            </div>
            `).join("")}
        </div>

        <h2 class="uppercase text-lg font-bold my-4 text-blue-900">Hoạt động sinh viên</h2>
        <div id="title" class="grid grid-cols-3 gap-8 mt-4 mb-4">
        ${data.map((post) => /* html */`
            <div class="border border-gray-400">
                <a href="/news/${post.id}">
                    <img src="${post.img}" alt="" class="ml-[20px] mr-[20px] mt-[15px] mb-[10px]">
                </a> 
                <a href="/news/${post.id}">
                    <h3 class="uppercase text-[15px] font-bold ml-[20px] mr-[20px] text-orange-400">${post.title}</h3>
                </a>
                <p class="ml-[20px] mr-[15px] mt-[10px] mb-[20px]">${post.desc}</p>
            </div>
            `).join("")}
        </div>
        ${Footer.render()}
        `;
    },
};
export default HomePage;