import { useEffect } from "react";
import Appbar from "../../layouts/Appbar";
import PageWrapper from "../../layouts/PageWrapper";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getAllArticles } from "../../store/slices/articles.slice";
import { Box, Grid, Typography } from "@mui/material";
import ArticleCard from "../../components/cards/ArticleCard";

interface IPageArticleProps {}

const PageArticle = ({}: IPageArticleProps) => {
  return (
    <>
      <Appbar title={"Article"}></Appbar>
      <div className="page-wrapper">
        <PageWrapper>
          <Typography variant="h5" mb={1}>
            Article Title
          </Typography>
          <Typography variant="body1">Article Body</Typography>
        </PageWrapper>
      </div>
    </>
  );
};

export default PageArticle;
