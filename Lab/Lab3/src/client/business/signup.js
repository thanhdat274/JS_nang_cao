import Footer from "../views/footer";
import Header from "../views/header";

const Signup = {
    render() {
        return /* html */ `
        ${Header.render()}
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border border-gray-400 my-[10px]">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">đăng ký</h2>
                    <p class="mt-2 text-center text-sm text-gray-600"></p>
                </div>
        
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div class="my-[20px]">
                        <label for="email-address" class="">Email <span class="text-red-500">*</span></label>
                        <input id="email-address" name="email" type="email" autocomplete="email"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    </div>
                    <div class="my-[20px]">
                        <label for="password" class="">Mật Khẩu <span class="text-red-500">*</span></label>
                        <input id="password" name="password" type="password" autocomplete="current-password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" >
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
        ${Footer.render()}
        `;
    },
};
export default Signup;