import Request from "../libs/request";

export const apiGetArticles = () => {
  return Request.Get("/api/article").then((res) => res.data);
};
