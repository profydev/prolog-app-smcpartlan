import styles from "./spinner.module.scss";

export function Spinner() {
  return (
    <div className={styles.loadingSpinnerContainer}>
      <div className={styles.spinnerContent}>
        <img
          className={styles.loadingSpinner}
          src="/icons/loading-spinner.svg"
          alt="Loading"
        />
      </div>
    </div>
  );
}
