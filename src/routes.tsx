import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import PageLanding from "./pages/Landing/PageLanding";
import PageArticles from "./pages/Articles/PageArticles";
import { categories } from "./config";
import PageSignin from "./pages/auth/PageSignIn";
import PageSignup from "./pages/auth/PageSignUp";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import PageAbout from "./pages/About/PageAbout";
import PageContactUs from "./pages/ContactUs/PageContactUs";
import PageArticle from "./pages/Article/PageArticle";
import { apiGetCategories } from "./api/categories";
import { Backdrop } from "@mui/material";
import CirclesLoader from "./components/loader/CirclesLoader";
import { useAppDispatch, useAppSelector } from "./hooks/store";
import { getAllCategories } from "./store/slices/category.slice";

function MainRoutes() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((store) => store.Category.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  if (!categories.length)
    return (
      <Backdrop open={true}>
        <CirclesLoader></CirclesLoader>
      </Backdrop>
    );

  return (
    <Routes>
      <Route path="/" element={<PageLayout></PageLayout>}>
        <Route path="" element={<PageLanding></PageLanding>}></Route>
        <Route path="article/:article_id" element={<PageArticle></PageArticle>}></Route>
        <Route path="about" element={<PageAbout></PageAbout>}></Route>
        <Route path="contactus" element={<PageContactUs></PageContactUs>}></Route>
        {categories.map((category) => (
          <Route
            key={category}
            path={category.toLowerCase()}
            element={<PageArticles category={category}></PageArticles>}
          ></Route>
        ))}
      </Route>
      <Route path="/" element={<AuthLayout></AuthLayout>}>
        <Route path="signin" element={<PageSignin></PageSignin>}></Route>
        <Route path="signup" element={<PageSignup></PageSignup>}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default MainRoutes;
