import React from "react";
import classes from "./Layout.style.module.css";
import {font} from "@/styles/fonts";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <ErrorBoundary>
            <main data-testid="main-tag" className={font.className}>
                <div className={classes.wrapper}>
                    {children}
                </div>
            </main>
        </ErrorBoundary>
    )
}

 export default Layout;
