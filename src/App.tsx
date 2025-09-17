import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./routes/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <ScrollToTop />
                    <AppRoutes />
                </Suspense>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
