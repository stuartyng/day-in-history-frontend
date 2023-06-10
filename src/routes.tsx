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

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout></PageLayout>}>
        <Route path="" element={<PageLanding></PageLanding>}></Route>
        <Route path="about" element={<PageAbout></PageAbout>}></Route>
        <Route path="contactus" element={<PageContactUs></PageContactUs>}></Route>
        {categories.map((category) => (
          <Route
            key={category.title}
            path={category.title.toLowerCase()}
            element={<PageArticles category={category.title}></PageArticles>}
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
