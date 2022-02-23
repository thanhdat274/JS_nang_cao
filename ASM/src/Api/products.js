import instance from "./config";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const getProInCate = (id) => {
    const url = `/categoryProducts/${id}?_embed=products`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post);
};
export const edit = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post);
};
export const getAllSearch = () => {
    const url = `/products?q=internet`;
    return instance.put(url);
};