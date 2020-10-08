import Head from "next/head";
import Link from "next/link";
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

      <Card title="BattPack" link="https://testflight.apple.com/join/d2EnvORF" red="255" green="89" blue="186" endred="240" endgreen="147" endblue="93">
        Track your batteries with style with BattPack. BattPack features charge
        cycle tracking, discharge reminder notificaitons, and a notes section
        for each battery, so you never lose track of your rechargable batteries
        again.
      </Card>
    </Layout>
  );
}

function Card({ title, link, red, green, blue, endred, endgreen, endblue, children }) {
  return (
    <div className="card">
      <style jsx>{`
        .card {
          max-width: min(85vw, 750px);
          min-height: 10px;
          border-radius: 20px;
          margin: 0 auto;
          box-shadow: 0 2.8px 2.2px rgba(${red}, ${green}, ${blue}, 0.02),
            0 6.7px 5.3px rgba(${red}, ${green}, ${blue}, 0.028),
            0 12.5px 10px rgba(${red}, ${green}, ${blue}, 0.035),
            0 22.3px 17.9px rgba(${red}, ${green}, ${blue}, 0.042),
            0 41.8px 33.4px rgba(${red}, ${green}, ${blue}, 0.05),
            0 100px 80px rgba(${red}, ${green}, ${blue}, 0.07);
          background: linear-gradient(
            45deg,
            rgba(${red}, ${green}, ${blue}, 1) 0%,
            rgba(${endred}, ${endgreen}, ${endblue}, 1) 100%
          );
          transition: 0.1s ease-in-out;
        }

        .card:hover {
          transform: scale(1.05);
        }
      `}</style>
      <Link href={link}>
        <a target="_blank">
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{children}</p>
        </a>
      </Link>
    </div>
  );
}