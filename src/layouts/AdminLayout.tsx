import React, { useEffect } from "react";
// import { Link } from "gatsby";
import { Links } from "../templates/Links";
import Header from "../templates/Header";
// import { SEOContext } from "gatsby-plugin-wpgraphql-seo";
// import { useSEO } from "../utils/hooks/useSEO";

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const seo = useSEO()

    useEffect(() => {
        console.log("Admin layout mounted");
        return () => {
            console.log("Admin layout Unmounted");
        }
    }, [])

    return (
        // <SEOContext.Provider value={{ global: seo }}>
        <div>
            <header>Admin Panel</header>
            <nav>
                <Header />
            </nav>
            <main style={{ minHeight: "200px", padding: "50px" }} >{children}</main>
            <footer>Admin Footer</footer>
        </div>
        // {/* </SEOContext.Provider> */}
    );
};


