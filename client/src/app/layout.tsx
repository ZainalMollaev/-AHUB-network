"use client";

import Head from "next/head";
import { Layout } from "../components/Layout";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry";

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>AHUB</title>
      </Head>
      <body>
        <StyledComponentsRegistry>
            <Layout children={children} />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
