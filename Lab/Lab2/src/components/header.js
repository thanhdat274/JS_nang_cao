import Nav from "./nav";

const Header = {
    render() {
        return /* html */ `
        <header>
        <div class="bg-blue-900 h-[100px] py-[25px]">
            <img src="https://picsum.photos/240/50" alt="" class="mx-auto" />
        </div>
        <div class="bg-orange-600 h-[40px]">
            ${Nav.render()}
        </div>
    </header>`;
    },
};
export default Header;