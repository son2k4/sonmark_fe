import React, { useContext } from "react";
import { AuthContentType } from "../types/AuthContextType";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = (): AuthContentType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
