import React, { useEffect } from "react";
import { Link } from "gatsby";
import { Links } from "../templates/Links";

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    useEffect(() => {
        console.log("Admin layout mounted");
        return () => {
            console.log("Admin layout Unmounted");
        }
    }, [])

    return (
        <div>
            <header>Admin Panel</header>
            <nav>
                <Links/>
            </nav>
            <main style={{ minHeight: "200px", padding: "50px" }} >{children}</main>
            <footer>Admin Footer</footer>
        </div>
    );
};
