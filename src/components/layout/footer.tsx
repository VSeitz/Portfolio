import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={`container content ${styles.footer}`}>
      <span>&copy; Valerian Seitz 2023</span>
      {/* <ul>
        <li>
          <a href="impressum">Impressum</a>
        </li>
      </ul> */}
    </footer>
  );
}
