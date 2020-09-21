import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Layout from "../components/layout";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>

      <div className={styles.main}>
        <h1>My Projects</h1>
      </div>
    </Layout>
  );
}
