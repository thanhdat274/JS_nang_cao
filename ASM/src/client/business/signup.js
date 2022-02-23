import toastr from "toastr";
import { signup } from "../../Api/users";
import "toastr/build/toastr.min.css";
import Header from "../views/header";
import Footer from "../views/footer";
import { $ } from "../../utils/selector";

const Signup = {
    async render() {
        return /* html */ `
        ${await Header.render()}
            <main class="mt-[10px]">
                <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-[10px]">
                    <div class="max-w-md w-full space-y-8">
                        <div>
                            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">đăng ký</h2>
                            <p class="mt-2 text-center text-sm text-gray-600"></p>
                        </div>
                        <form id="formSignup">
                            <div class="mt-4">
                                <div>
                                    <label class="block" for="Name">Họ và tên <span class="text-red-500">*</span><label>
                                    <input type="text" name="name-user" id="name-user" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                </div>
                                <div class="mt-4">
                                    <label class="block" for="email">Địa chỉ email <span class="text-red-500">*</span><label>
                                    <input type="text" name="email" id="email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                </div>
                                <div class="mt-4">
                                    <label class="block">Mật khẩu <span class="text-red-500">*</span><label>
                                    <input type="password" name="password" id="password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                </div>
                                <div class="flex mt-[20px]">
                                    <button id="btn-save-users" class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Đăng ký</button>
                                </div>
                                <div class="mt-6 text-grey-dark">Bạn đã có tài khoản? <a class="text-blue-600 hover:underline" href="/signin">Đăng nhập</a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            ${Footer.render()}
        `;
    },
    afterRender() {
        const formSignup = $("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    name: $("#name-user").value,
                    email: $("#email").value,
                    password: $("#password").value,
                    phone: "",
                    address: "",
                    roleId: "user",
                    img: "",
                });
                if (data) {
                    toastr.success("Đăng ký thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signup;