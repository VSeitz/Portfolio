import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className="container">
        <h1>Webspace 🚀</h1>
      </div>

      <div className="container content">
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <p>hello</p>
      </div>
    </div>
  );
}
