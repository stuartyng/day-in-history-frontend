import React, { useEffect } from "react";
import Appbar from "../../layouts/Appbar";
import PageWrapper from "../../layouts/PageWrapper";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getAllArticles } from "../../store/slices/articles.slice";
import { Box, Grid } from "@mui/material";
import ArticleCard from "../../components/cards/ArticleCard";

const PageLanding = () => {
  const articles = useAppSelector((store) => store.Articles.articles).slice(0, 30);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, []);

  return (
    <>
      <Appbar title="Channels"></Appbar>
      <div className="page-wrapper">
        <PageWrapper>
          <Grid container alignItems="stretch">
            {articles.map((t, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box sx={{ p: 0.5, height: "100%" }}>
                  <ArticleCard article={t}></ArticleCard>
                </Box>
              </Grid>
            ))}
          </Grid>
        </PageWrapper>
      </div>
    </>
  );
};

export default PageLanding;
