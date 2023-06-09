import { Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import PageLanding from "./pages/Landing/PageLanding";
import PageArticles from "./pages/Articles/PageArticles";
import { categories } from "./config";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout></PageLayout>}>
        <Route path="" element={<PageLanding></PageLanding>}></Route>
        {categories.map((category) => (
          <Route
            key={category.title}
            path={category.title.toLowerCase()}
            element={<PageArticles category={category.title}></PageArticles>}
          ></Route>
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default MainRoutes;
