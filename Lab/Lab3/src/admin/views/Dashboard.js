import NavAdmin from "./nav";

const AdminDashboard = {
    render() {
        return /* html */`
        <div class="min-h-full">
        ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <h1 class="font-bold text-gray-900 text-[50px] text-center">Công cụ quản trị</h1>
                </div>
            </main>
        </div>
        `;
    },
};
export default AdminDashboard;