import { Routes, Route, Navigate } from "react-router-dom";
import { Domain as IconDomain } from "@mui/icons-material";
import PageLayout from "./layouts/PageLayout";
import PageDomains from "./pages/Articles/PageArticles";
import PageLanding from "./pages/Landing/PageLanding";

export const NAVIGATION_MENUS = [
  {
    path: "/domains",
    title: "Domains",
    element: <PageDomains></PageDomains>,
    icon: IconDomain,
    onlyAdmin: true,
    onlySuperAdmin: true,
  },
];

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout></PageLayout>}>
        <Route path="" element={<PageLanding></PageLanding>}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default MainRoutes;
