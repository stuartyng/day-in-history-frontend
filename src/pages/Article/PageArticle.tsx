import { useEffect, useState } from "react";
import Appbar from "../../layouts/Appbar";
import PageWrapper from "../../layouts/PageWrapper";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { Box, Grid, Typography, Backdrop, IconButton } from "@mui/material";
import { Facebook as IconFacebook, Google as IconGoogle, Twitter as IconTwitter } from "@mui/icons-material";
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
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
          <IconButton
            color="error"
            aria-label="Google"
            size="large"
            onClick={() => {
              window.location.assign("mailto:business.todayinhistory@gmail.com");
            }}
          >
            <IconGoogle fontSize="inherit" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Facebook"
            size="large"
            onClick={() => {
              window.location.assign("https://www.facebook.com/groups/655176086647110");
            }}
          >
            <IconFacebook fontSize="inherit" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Twitter"
            size="large"
            onClick={() => {
              // window.location.assign("https://google.com");
            }}
          >
            <IconTwitter fontSize="inherit" />
          </IconButton>
        </Box>
      </div>
    </>
  );
};

export default PageArticle;
