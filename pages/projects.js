import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import Layout from '../components/layout';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>

      <div className={styles.main}>
        <h1>My Projects</h1>
      </div>

      <Card
        title="BattPack"
        link="https://apps.apple.com/us/app/battpack/id1522165410"
      >
        Track your batteries with style with BattPack. BattPack features charge
        cycle tracking, discharge reminder notificaitons, and a notes section
        for each battery, so you never lose track of your rechargable batteries
        again.
      </Card>
    </Layout>
  );
}

function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <Link href="https://apps.apple.com/us/app/battpack/id1522165410">
        <a>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{children}</p>
        </a>
      </Link>
    </div>
  );
}
