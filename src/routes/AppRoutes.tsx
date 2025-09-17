import React, { Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
    const routes = useRoutes([UserRoutes, AdminRoutes, ...PublicRoutes]);
    return routes;
};

export default AppRoutes;
