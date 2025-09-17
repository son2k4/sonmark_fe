import React from "react";
import Header from "../components/layout/user/Header";
import Footer from "../components/layout/user/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <>
            <Header />
            <main className="container home">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default UserLayout;
