import data from "../data";

const NewDetail = {
    render(id) {
        const found = data.find((post) => post.id === id);

        return `<div class="max-w-5xl mx-auto">
            <h1>${found.title}</h1>
            <img src="${found.img}" />
            <p>${found.desc}</p>
        </div>`;
    },
};
export default NewDetail;