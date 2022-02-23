import instance from "./config";

export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};
export const add = (post) => {
    const url = `/users`;
    return instance.post(url, post);
};
export const edit = (post) => {
    const url = `/users/${post.id}`;
    return instance.put(url, post);
};

// phần đăng kí tài khoản bên ngoài trang chủ
export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
};
export const signin = (user) => {
    const url = `/signin`;
    return instance.post(url, user);
};