import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import { add } from "../../../api/posts";

const AddPost = {
    render() {
        return /* html */`
            <form id="formAddPost">
                <input type="text" id="title-post" class="border border-black" placeholder="Title" name="title-post" /><br />
                <input type="file" id="img-post" class="border border-black" placeholder="Title" /><br />
                <img src="" id="img-preview"/>
                <textarea name="" id="desc-post" class="border border-black" cols="30" rows="10"></textarea><br />
                <button>Tạo bài viết</button>
            </form>
        `;
    },
    afterRender() {
        const formAddPost = $("#formAddPost");
        const CLOUDINARY_PRESET_KEY = "js8yqruv";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dvj4wwihv/image/upload";
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#img-preview");

        let imgLink = "";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formAddPost.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5,
                },
            },
            messages: {
                "title-post": {
                    required: "Bắt buộc phải nhập trường này!",
                    minlength: "Nhập ít nhất 5 ký tự",
                },
            },
            submitHandler() {
                async function addPostHandle() {
                    const file = imgPost.files[0];
                    if (file) {
                        // lấy giá trị của file và gán vào object formData
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUDINARY_PRESET_KEY);

                        // call API cloudinary để đẩy ảnh lên
                        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        imgLink = data;
                    }
                    // call api thêm bài viết
                    add({
                        title: document.querySelector("#title-post").value,
                        img: imgLink || "",
                        desc: document.querySelector("#desc-post").value,
                    });
                }
                addPostHandle();
            },
        });
    },
};
export default AddPost;