import { getAll } from "../../Api/cates";
import { reRender } from "../../utils/rerender";

const Nav = {
    async render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        const { data } = await getAll();
        return /* html */ `
            <div class="bg-white h-[50px] mb-[10px]">
                <div class="max-w-[1440px] mx-auto text-[15px] leading-[20px]">
                    <div class="grid grid-cols-3 gap-5 mt-4 mb-4">
                        <div class="grid grid-cols-2 mx-auto">
                            <p class="mr-[10px]">Bạn đang xem giá, tồn kho tại</p>
                            <div class="location-dropdown">
                                <div class="location-dropdown-title">
                                    <select class="location_name border-none bg-none text-[#c6992f]">
                                        <option value="1" selected="" class="bg-[#c69a39] text-[#fff]">Hà Nội</option>
                                        <option value="2" class="bg-[#c69a39] text-[#fff]">Hồ Chí Minh</option>
                                        <option value="3" class="bg-[#c69a39] text-[#fff]">Đà Nẵng</option>
                                    </select>
                                </div>
                                <div class="location-dropdown-list hidden">
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 text-center">
                            <p>Hotline: <span class="text-[#f1aa0c]">HN: 0969.120.120 - SG: 0965.123.123 - ĐN:
                                    096.123.9797 - CSKH Online
                                    037.462.9999 - 096.539.7966</span></p>
                        </div>
                        <div class="grid grid-cols-1 mx-auto">
                        ${localStorage.getItem("user") ? `<ul class="flex">
                            <li class="flex items-center">Xin chao <span class="block py-3 px-4" id="email">hh</span></li>
                            <li><a class="block py-3 px-4" id="logout">logout</a></li>
                        </ul>` : `<ul class="flex">
                                <li class="mx-4"><a href="/signup">Đăng ký</a></li>
                                <li class="mx-4 text-[#f1aa0c]"><a href="">|</a></li>
                                <li class="mx-4"><a href="/signin">Đăng nhập</a></li>
                            </ul>`} 
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[#c69a39] h-[100px]">
                <div class="max-w-[1440px] mx-auto">
                    <div class="grid grid-cols-3">
                        <div class="my-[15px]">
                            <a href="/">
                                <img src="../../../src/image/NTĐ (3).png" alt="" class="w-[70px] h-[70px] mx-auto">
                            </a>
                        </div>
                        <div class="h-[35px] my-[35px] bg-white">
                            <form method="get">
                                <input type="text" class="w-[450px] h-[35px] pl-[10px]" name="keyword" id="keyword"
                                    autocomplete="off" placeholder="Tìm kiếm sản phẩm ...">
                                <button type="submit" class="btn-search">
                                    <i class="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div class="my-auto mx-auto">
                            <a href="/cart" class="flex">
                                <i class="fas fa-shopping-cart text-[35px] mr-[10px]"></i> 
                                <p class="text-[20px]">Cart</p>
                                <div class="shopee-cart-number-badge">${cart.length}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[#daab47] h-[50px]">
                <div class="max-w-[1440px] mx-auto">
                    <div class="flex justify-center">
                        <nav class="">
                            <ul class="flex h-[50px] oy-2">
                                <li><a href="/" class="menu-item">Trang chủ</a></li>
                                ${data.map((post) => /* html */ `
                                <li><a href="/categoryProducts/${post.id}" class="menu-item">${post.title}</a></li>
                                `).join("")}
                                <li><a href="/blog" class="menu-item">Tin tức công nghệ</a></li>
                                <li><a href="/" class="menu-item">Liên hệ</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Nav, "#main-menu");
            });
        }
    },
};
export default Nav;