import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthContentType } from "../types/AuthContextType";
import { User } from "../types/User";

export const AuthContext = createContext<AuthContentType | undefined>(
    undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedToken && storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }

        setLoading(false);
    });

    const login = (userData: User, token: string) => {
        setUser(userData);
        setIsAuthenticated(true);
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
