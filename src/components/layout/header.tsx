import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <span>Qnex.</span>
      <nav>
        <ul>
          <li>Über mich</li>
          <li>Projekte</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}
