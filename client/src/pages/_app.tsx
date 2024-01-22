import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>AHUB-Network</title>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default App