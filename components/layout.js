import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800" rel="stylesheet" />
      </Head>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.pagetitle}>Bigspeed</a>
        </Link>
        <Link href="projects">
          <a className={styles.link}>Projects</a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
