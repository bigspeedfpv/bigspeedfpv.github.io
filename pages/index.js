import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bigspeed</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.profile_border}>
            <img
              src="/bigspeed.jpg"
              alt="Bigspeed Picture"
              className={styles.profile}
            />
          </div>
          <h1 className={styles.title}>Hello, I'm Bigspeed.</h1>

          <p className={styles.description}>I fly drones and make stuff.</p>
        </main>
      </div>
    </Layout>
  );
}
