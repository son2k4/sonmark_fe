import React from "react";
import { ERole } from "../types/ERole";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
    children: React.ReactElement;
    roles: ERole[];
};

const ProtectedRoute = ({ children, roles }: Props) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <div>loading...</div>;
    }

    if (!user) {
        return <Navigate to="" state={{ from: location }} replace />;
    }

    if (roles && roles.length > 0) {
        const hasPermission = roles.some((role) => user.roles.includes(role));
        if (!hasPermission) {
            return <Navigate to="" replace />;
        }
    }

    return children;
};

export default ProtectedRoute;
