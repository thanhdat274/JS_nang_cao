const Nav = {
    render() {
        return /* html */ ` <nav>
        <ul class="flex h-10 py-2">
                <li class="mx-4 text-slate-100"><a href="/">Trang chủ</a></li>
                <li class="mx-4 text-slate-100"><a href="">Tuyển sinh</a></li>
                <li class="mx-4 text-slate-100">
                    <a href="">Chương trình đào tạo</a>
                </li>
                <li class="mx-4 text-slate-100"><a href="">Góc sinh viên</a></li>
                <li class="mx-4 text-slate-100"><a href="">Tuyển dụng</a></li>
                <div class="ml-[90px]">
                    <input type="text" class="border-0 w-[180px] h-[25px]" />
                    <button class="bg-blue-900 border-[1px] border-white text-slate-100 ml-[10px] w-[90px] h-[25px]">Tìm kiếm</button>
                </div>
            </ul>
    </nav>`;
    },
};
export default Nav;