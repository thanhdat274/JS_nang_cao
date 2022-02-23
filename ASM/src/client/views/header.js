import Nav from "./Nav";

const Header = {
    async render() {
        return /* html */ `
        <header>
            <div id="main-menu">
                ${await Nav.render()}
            </div>
        </header>
        `;
    },
    afterRender() {
        Nav.afterRender();
    },
};

export default Header;