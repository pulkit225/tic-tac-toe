import Head from "next/head";
import styles from "../styles/Home.module.css";
import Board from "../containers/Board";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe by Pulkit</title>
      </Head>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}
