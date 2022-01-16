import data from "../data";

const NewPage = {
    render(id) {
        const found = data.find((post) => post.id === id);
        return `
        <div class="max-w-5xl mx-auto border border-gray-400 mt-4 mb-4"">
            <h1 class="uppercase text-lg font-bold mt-[15px] mb-[20px] ml-[20px]">${found.title}</h1>
            <img src="${found.img}"  alt="" class="ml-[20px] mr-[20px] mt-[15px] mb-[10px] w-[980px] h-[500px]">
            <p class="ml-[20px] mr-[20px] mt-[10px] mb-[20px]">${found.name}</p>
        </div>
        `;
    },
};
export default NewPage;