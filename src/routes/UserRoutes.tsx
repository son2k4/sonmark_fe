import { lazy } from "react";
import UserLayout from "../layouts/UserLayout";
import { ERole } from "../types/ERole";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/user/Home"));

const UserRoutes = {
    path: "/user",
    element: (
        <ProtectedRoute roles={[ERole.User, ERole.Admin]}>
            <UserLayout />
        </ProtectedRoute>
    ),
    children: [{ path: "home", element: <Home /> }],
};

export default UserRoutes;
