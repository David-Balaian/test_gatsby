import React, { useEffect } from "react";
// import { Link } from "gatsby";
import { Links } from "../templates/Links";
import Header from "../templates/Header";
// import { useSEO } from "../utils/hooks/useSEO";
// import { SEOContext } from "gatsby-plugin-wpgraphql-seo";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const seo = useSEO()
    useEffect(() => {
        console.log("Main layout mounted");
        return () => {
            console.log("Main layout Unmounted");
        }
    }, [])


    return (
        // <SEOContext.Provider value={{ global: seo }}>
        <div>
            {/*<header>Main Site Header</header>*/}
            <nav>
                <Header />
            </nav>
            <main style={{ minHeight: "200px" }} >{children}</main>
            {/*<footer>Main Footer</footer>*/}
        </div>
        // {/* </SEOContext.Provider> */}
    );
};
