import React from "react";
import { ERole } from "../types/ERole";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactElement;
    redirectTo?: string;
};

const getDefaultRedirect = (roles: ERole[]): string => {
    if (roles.includes(ERole.Admin)) return "/admin";
    if (roles.includes(ERole.User)) return "/home";
    return "/";
};

const PublicRoute = ({ children, redirectTo }: Props) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        const path = getDefaultRedirect(user.roles) || redirectTo || "/";
        return <Navigate to={path} replace />;
    }

    return children;
};

export default PublicRoute;
