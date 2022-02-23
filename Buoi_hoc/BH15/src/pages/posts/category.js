import { getCate } from "../../api/posts";

const DetailCategoryPost = {
    async render(id) {
        const { data } = await getCate(id);
        return `
            <h1>Category name: ${data.name}</h1>
            <div class="grid grid-cols-4 gap-8">
                ${data.posts.map((post) => `
                    <div class="shadow-lg">
                        <h4><a href="/#/news/${post.id}">${post.title}</a></h4>
                    </div>
                `).join("")}
            
            </div>
        `;
    },
};
export default DetailCategoryPost;