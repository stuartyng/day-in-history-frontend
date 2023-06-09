import React, { useEffect } from "react";
import Appbar from "../../layouts/Appbar";
import PageWrapper from "../../layouts/PageWrapper";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getAllArticles } from "../../store/slices/articles.slice";

const PageLanding = () => {
  const articles = useAppSelector((store) => store.Articles.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, []);

  return (
    <>
      <Appbar title="Channels"></Appbar>
      <div className="page-wrapper">
        <PageWrapper></PageWrapper>
      </div>
    </>
  );
};

export default PageLanding;
