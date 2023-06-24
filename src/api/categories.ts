import Request from "../libs/request";

export const apiGetCategories = () => {
  return Request.Get("/api/categories").then((res) => res.data);
};
