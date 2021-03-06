import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { Fragment } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeDex</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </Fragment>
  )
}