import styles from "./footer.module.scss";
import version from "../../../package.json";

const currentVersion = version;
export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.version}>
          Version: {currentVersion.version.trim()}
        </p>
        <div className={styles.linksContainer}>
          <a className={styles.link} href="#">
            Docs
          </a>
          <a className={styles.link} href="#">
            API
          </a>
          <a className={styles.link} href="#">
            Help
          </a>
          <a className={styles.link} href="#">
            Community
          </a>
        </div>
        <div className={styles.logoWrapper}>
          <img src="/icons/logo-small.svg" className={styles.logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
