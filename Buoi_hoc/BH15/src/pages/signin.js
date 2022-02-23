import toastr from "toastr";
import { $ } from "../utils/selector";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Signin = {
    render() {
        return /* html */ `
        <div id="header">
            ${Header.render()}
        </div>
        <form id="formSignin">
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border border-gray-400 my-[10px]">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">đăng nhập</h2>
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

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>
                    <div class="text-sm">
                        <a href="" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                    </div>
                </div>
                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng nhập</button>
                </div>
                <div class="">
                    <p class="text-center"> Bạn chưa có tài khoản? <a href="/signup" class="register">Đăng ký </a></p>
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
        $("#formSignin").addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // call api, nếu đăng nhập thành công sẽ trả về object data
                const { data } = await signin({
                    email: $("#email").value,
                    password: $("#password").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                setTimeout(() => {
                    if (data.user.id === 1) {
                        document.location.href = "/";
                    } else {
                        document.location.href = "/";
                    }
                }, 2000);
            } catch (error) {
                // nếu lỗi thì trả về object chứa lỗi error.response.data
                toastr.success(error.response.data);
                $("#formSignin").reset();
            }
        });
    },
};
export default Signin;