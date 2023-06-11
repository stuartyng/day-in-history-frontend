import Request from "../libs/request";

export const apiGetArticles = () => {
  return Request.Get("/api/article").then((res) => res.data);
};

export const apiGetArticle = (article_id: string) => {
  return Request.Get(`/api/article/${article_id}`).then((res) => res.data);
};
