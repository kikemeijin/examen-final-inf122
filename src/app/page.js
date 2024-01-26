import styles from "./page.module.css";
import Pokedex from "./components/Pokedex.js";
export default function Home() {
  return (
    <main className={styles.main}>
      <Pokedex/>
    </main>
  );
}