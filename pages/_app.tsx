import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <HelmetProvider>
                <Component {...pageProps} />
            </HelmetProvider>
        </React.StrictMode>
    );
}
