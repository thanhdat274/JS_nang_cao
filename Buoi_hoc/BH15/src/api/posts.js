import instance from "./config";

export const getAll = () => {
    const url = `/posts`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};
export const add = (post) => {
    const url = `/posts`;
    return instance.post(url, post);
};
export const update = (post) => {
    const url = `/posts/${post.id}`;
    return instance.put(url, post);
};

export const getAllCate = () => {
    const url = `/categoryPosts`;
    return instance.get(url);
};
export const getCate = (id) => {
    const url = `/categoryPosts/${id}?_embed=posts`;
    return instance.get(url);
};
export const removeCate = (id) => {
    const url = `/categoryPosts/${id}`;
    return instance.delete(url);
};
export const addCate = (post) => {
    const url = `/categoryPosts`;
    return instance.post(url, post);
};
export const updateCate = (post) => {
    const url = `/categoryPosts/${post.id}`;
    return instance.put(url, post);
};