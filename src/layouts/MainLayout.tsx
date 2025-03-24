import React, { useEffect } from "react";
import { Link } from "gatsby";
import { Links } from "../templates/Links";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    useEffect(() => {
        console.log("Main layout mounted");
        return () => {
            console.log("Main layout Unmounted");
        }
    }, [])


    return (
        <div>
            <header>Main Site Header</header>
            <nav>
                <Links/>
            </nav>
            <main style={{ minHeight: "200px", padding: "50px" }} >{children}</main>
            <footer>Main Footer</footer>
        </div>
    );
};
