import axiosClient from "./axiosClient";

export const productApi = {
  getAll: (params) => {
    const subUrl = `/products`;
    return axiosClient.get(subUrl, { params }); // options object {params,header:{},baseURL:'adadadw.com'}
  },
  get: (id) => {
    const subUrl = `/products/${id}`;
    return axiosClient.get(subUrl);
  },
};
