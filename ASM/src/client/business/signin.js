import toastr from "toastr";
import { signin } from "../../Api/users";
import "toastr/build/toastr.min.css";
import Header from "../views/header";
import Footer from "../views/footer";
import { $ } from "../../utils/selector";

const Signin = {
    async render() {
        return /* html */ `
            ${await Header.render()}
            <main class="mt-[10px]">
                <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-[10px]">
                    <div class="max-w-md w-full space-y-8">
                        <div>
                            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">đăng nhập</h2>
                            <p class="mt-2 text-center text-sm text-gray-600"></p>
                        </div>
                        <form id="formSignin" class="space-y-6">
                            <div class="mt-4">
                                <label class="block" for="email">Địa chỉ email <span class="text-red-500">*</span><label>
                                <input type="text" name="email" id="email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="mt-4">
                                <label class="block">Mật khẩu <span class="text-red-500">*</span><label>
                                <input type="password" name="password" id="password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="comments" class="text-gray-500 cursor-pointer">Remember me</label>
                                    </div>
                                </div>
                                <a href="/forgetPass" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                            </div>
                            <div>
                                <button type="submit" class="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker">
                                Đăng nhập
                                </button>
                            </div>
                        </form>
                        <div class="flex items-center justify-center space-x-2 flex-nowrap">
                            <span class="w-20 h-px bg-gray-300"></span>
                            <span>OR</span>
                            <span class="w-20 h-px bg-gray-300"></span>
                        </div>
                        <div class="grid grid-cols-3 gap-3 text-xl">
                            <div class="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100 ">
                                <a href="#">  <i class="fab fa-google"></i></a>
                            </div>
                            <div class="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100">
                                <i class="fab fa-linkedin"></i>
                            </div>
                            <div class="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100">
                                <i class="fab fa-github"></i>
                            </div>
                        </div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Bạn chưa có tài khoản? <a href="/signup" class="text-blue-600 hover:underline">Đăng ký</a></div>
                    </div>
                </div>
            </main>
            ${Footer.render()}
        `;
    },
    afterRender() {
        const formSignin = $("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: $("#email").value,
                    password: $("#password").value,
                });
                if (data) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signin;