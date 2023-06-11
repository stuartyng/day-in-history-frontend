import { useEffect, useState } from "react";
import Appbar from "../../layouts/Appbar";
import PageWrapper from "../../layouts/PageWrapper";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { Button, Box, Grid, Typography, Backdrop, IconButton } from "@mui/material";
import {
  ArrowBack as IconArrowBack,
  Facebook as IconFacebook,
  Google as IconGoogle,
  Twitter as IconTwitter,
} from "@mui/icons-material";
import ArticleCard from "../../components/cards/ArticleCard";
import { Route, useNavigate, useParams } from "react-router-dom";
import { apiGetArticle } from "../../api/articles";
import { IArticle } from "../../types/interfaces";
import CirclesLoader from "../../components/loader/CirclesLoader";

interface IPageArticleProps {}

const PageArticle = ({}: IPageArticleProps) => {
  const navigate = useNavigate();
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
            <Box sx={{ mb: 2 }}>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                color="primary"
                variant="contained"
                startIcon={<IconArrowBack></IconArrowBack>}
              >
                Go to back
              </Button>
            </Box>
            {article?.image && (
              <Box display="flex" alignItems="center" justifyContent="center" sx={{ my: 2 }}>
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "50%",
                      md: "35%",
                    },
                    borderRadius: "10px",
                  }}
                  src={article.image}
                  alt="Paella dish"
                />
              </Box>
            )}
            <Typography variant="h5" mb={1}>
              {article?.title}
            </Typography>
            <Typography variant="body1">{article?.body}</Typography>

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
                  window.location.assign("https://twitter.com/todayin2history");
                }}
              >
                <IconTwitter fontSize="inherit" />
              </IconButton>
            </Box>
          </PageWrapper>
        )}
      </div>
    </>
  );
};

export default PageArticle;
