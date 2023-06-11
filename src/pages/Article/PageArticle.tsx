import { useEffect, useState } from "react";
import Appbar from "../../layouts/Appbar";
import PageWrapper from "../../layouts/PageWrapper";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { Box, Grid, Typography, Backdrop } from "@mui/material";
import ArticleCard from "../../components/cards/ArticleCard";
import { useParams } from "react-router-dom";
import { apiGetArticle } from "../../api/articles";
import { IArticle } from "../../types/interfaces";
import CirclesLoader from "../../components/loader/CirclesLoader";

interface IPageArticleProps {}

const PageArticle = ({}: IPageArticleProps) => {
  const { article_id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [article, setArticle] = useState<IArticle | null>();

  useEffect(() => {
    if (article_id) {
      apiGetArticle(article_id)
        .then((article: IArticle) => {
          setArticle(article);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      <Appbar title={"Article"}></Appbar>
      <div className="page-wrapper">
        {isLoading ? (
          <Backdrop open={true} sx={{ zIndex: 9999 }}>
            <CirclesLoader></CirclesLoader>
          </Backdrop>
        ) : (
          <PageWrapper>
            <Typography variant="h5" mb={1}>
              {article?.title}
            </Typography>
            <Typography variant="body1">{article?.body}</Typography>
          </PageWrapper>
        )}
      </div>
    </>
  );
};

export default PageArticle;
