import toastr from "toastr";
import { signup } from "../api/user";
import Footer from "../components/footer";
import Header from "../components/header";
import { $ } from "../utils/selector";
import "toastr/build/toastr.min.css";

const Signup = {
    render() {
        return /* html */ `
        <div id="header">
            ${Header.render()}
        </div>
        <form id="formSignup">
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border border-gray-400 my-[10px]">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">đăng ký</h2>
                    <p class="mt-2 text-center text-sm text-gray-600"></p>
                </div>
        
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div class="my-[20px]">
                        <label for="email" class="">Email <span class="text-red-500">*</span></label>
                        <input id="email" name="email" type="email" autocomplete="email"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    </div>
                    <div class="my-[20px]">
                        <label for="password" class="">Mật Khẩu <span class="text-red-500">*</span></label>
                        <input id="password" name="password" type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" >
                    </div>
                </div>
                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Đăng ký</button>
                </div>
                <div class="">
                    <p class="text-center"> Bạn đã có tài khoản? <a href="/signin" class="register">Đăng nhập </a></p>
                </div>
            </div>
        </div>
        </form>
        <div id="footer">
            ${Footer.render()}
        </div>
        `;
    },
    afterRender() {
        $("#formSignup").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: $("#email").value,
                    password: $("#password").value,
                });
                toastr.success("Đăng ký thành công");
                if (data) {
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
                $("#formSignup").reset();
            }
        });
    },
};
export default Signup;